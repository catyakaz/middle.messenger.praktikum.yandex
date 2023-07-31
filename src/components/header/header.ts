import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { Button } from '../button';
import { Hint } from '../hint';
import './styles.scss';
import { HeaderTmpl } from './header.tmpl';

interface HeaderProps {
  title?: string;
  usersInChat?: string;
  isShowHint?: boolean;
}

const header = Handlebars.compile(HeaderTmpl);

export class Header extends Block {
  constructor(props: HeaderProps) {
    super({ ...props });
  }

  protected init() {
    this.children.button = new Button({
      type: 'button',
      buttonClass: 'chat__more',
      events: {
        click: () => {
          this.props.isShowHint = !this.props.isShowHint;
        },
      },
    });

    this.children.hint = new Hint({ open: false });
  }

  render() {
    return this.compile(header, this.props);
  }
}
