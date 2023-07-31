import Handlebars from 'handlebars';

import { InputTmpl } from './input.tmpl';
import Block from '../../core/Block';
import './styles.scss';
import { Button } from '../button';
import { StoreApp } from '../../core/Store';
import { sendMessage } from '../../controllers/MessagesControllers';
import { getChats } from '../../controllers/ChatsControllers';

interface InputProps {
  value?: string,
  error?: string,
  name?: string,
  placeholder?: string,
  type?: string,
  inputClass?: string,
  inputContainerClass?: string,
  events?: { focusin?: (e: Event) => void; focusout?: (e: Event) => void; change?: (e: Event) => void };
}

const input = Handlebars.compile(InputTmpl);

export class Input extends Block {
  constructor(props: InputProps) {

    super({ ...props });
  }

  init() {
    this.children.sendMessageButton = new Button({
      buttonClass: 'send_message_button',
      events: {
        click: (evt) => {
          this.onSubmit(evt);
        },
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    const inputMessage = document.querySelector('.input_message') as HTMLInputElement;

    let { value } = inputMessage;

    if (value.length > 0) {
      const chatId = StoreApp.getState().selectedChat!.id!;

      sendMessage(chatId, value);

      getChats().finally(() => {
        value = '';
      });
    }
  }

  render() {
    return this.compile(input, this.props);
  }
}
