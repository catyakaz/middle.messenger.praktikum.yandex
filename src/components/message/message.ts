import Handlebars from 'handlebars';

import { MessageTmpl } from './message.tmpl';
import Block from '../../core/Block';

import './styles.scss';

interface MessageProps {
  name?: string,
  text: string,
  messageClass?: string
}

const message = Handlebars.compile(MessageTmpl);

export class Message extends Block {
  constructor(props: MessageProps) {

    super({ ...props });
  }

  render() {
    return this.compile(message, this.props);
  }
}
