import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from './button';

describe('Button', () => {
  it('Должен быть кликабельным', () => {
    const callback = sinon.stub();
    const button = new Button({ events: { click: callback }, buttonText: 'Авторизоваться' });

    const element = button.element as HTMLElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });

  it('Корректное отображение текста', () => {
    const callback = sinon.stub();
    const button = new Button({ events: { click: callback }, buttonText: 'Авторизоваться2' });

    const element = button.element as HTMLElement;

    expect(element.textContent).to.eq('Авторизоваться2');
  });
});
