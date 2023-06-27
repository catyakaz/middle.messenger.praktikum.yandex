import { v4 as uuid } from 'uuid';
import EventBus from './EventBus';

// прописываем any, чтобы была возможность вызывать коллбэк по листенеру через eventName
type Props = Record<string, any>;

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null = null;

  public id: string;

  public children: Record<string, Block | Block[]>;

  public props: Props;

  private eventBus: () => EventBus;

  constructor(childrenAndProps: Props = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(childrenAndProps);

    this.id = uuid();
    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }


  private _getChildrenAndProps(childrenAndProps: Props): {
    props: Props,
    children: Record<string, Block | Block[]>;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (
        Array.isArray(value) &&
          value.length > 0 &&
          value.every((v) => v instanceof Block)
      ) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  public componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  public componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps !== newProps;
  }

  public setProps = (nextProps:Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  protected compile(
    template: (context: Record<string, unknown>) => string,
    context: Record<string, unknown>,
  ) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component
          .map((c) => `<div data-id=${c.id}></div>`)
          .join('');
      } else {
        contextAndStubs[name] = `<div data-id=${component.id}></div>`;
      }
    });

    const html = template(contextAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;

    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(
        `[data-id="${component.id}"]`,
      );
      if (!stub) {
        return;
      }
      component.getContent()?.append(...Array.from(stub.childNodes));
      stub.replaceWith(component.getContent());
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  private _addEvents(): void {
    const { events } = this.props;

    if (events) {

      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  private _removeEvents(): void {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  private _render() {
    const block = this.render();
    const newElement = block.firstElementChild as HTMLElement;
    this._removeEvents();
    if (this.element && newElement) {
      this.element.replaceWith(newElement);
    }
    this._element = newElement;

    this._addEvents();
  }

  public render(): DocumentFragment {
    return document.createElement('template').content;
  }

  getContent() {
    if (!this.element) {
      throw new Error('Элемент не найден');
    }
    return this.element;
  }


  private _makePropsProxy(props: Record<string, any>): Record<string, any> {
    const proxySetting = {
      get: (target: Record<string, any>, prop: string): unknown => {
        return target[prop];
      },

      set: (
        target: Record<string, any>,
        prop: string,
        value: unknown,
      ): boolean => {
        const oldProps = target[prop];
        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target[prop]);
        return true;
      },

      deleteProperty: (target: Record<string, any>, prop: string): boolean => {
        const oldProps = target[prop];
        delete target[prop];

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target[prop]);
        return true;
      },
    };

    return new Proxy(props, proxySetting);
  }

  static createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
