import Handlebars from 'handlebars';

import { ButtonTmpl } from './button.tmpl';
import Block from '../../utils/Block';
import './styles.scss';

interface ButtonProps {
  buttonClass: string,
  buttonText: string,
  events?: { click: (e: Event) => void };
}

const button = Handlebars.compile(ButtonTmpl);

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(button, this.props);
  }
}
