import Handlebars from 'handlebars';

import { InputTmpl } from './input.tmpl';
import Block from '../../utils/Block';
import './styles.scss';

interface InputProps {
  error?: string,
  name?: string,
  placeholder?: string,
  type?: string,
  inputClass?: string,
  inputContainerClass?: string,
  events?: { focusin: (e: Event) => void; focusout: (e: Event) => void };
}

const input = Handlebars.compile(InputTmpl);

export class Input extends Block {
  constructor(props: InputProps) {

    super({ ...props });
  }

  render() {
    return this.compile(input, this.props);
  }
}
