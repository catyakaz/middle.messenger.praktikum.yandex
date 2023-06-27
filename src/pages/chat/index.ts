import Handlebars from 'handlebars';
import './styles.scss';

import { Input } from '../../components/input';
import { UserInfoChat } from '../../components/userInfoChat';
import { Message } from '../../components/message';
import srcImg from './img/edit-profile-icon.png';
import moreImg from './img/more-icon.png';
import { CHATS, MESSAGES } from './stub_messages';

import './styles.scss';
import Block from '../../utils/Block';
import { ChatTmpl } from './chat.tmpl';
import { blur, focus } from '../../utils/validate';

const chat = Handlebars.compile(ChatTmpl);

export class Chat extends Block {
  constructor(props: {}) {
    const inputSearch = new Input({
      name: 'search',
      type: 'search',
      placeholder: 'Поиск...',
      inputClass: 'input_search',
    });

    const inputMessage = new Input({
      name: 'message',
      type: 'text',
      placeholder: 'Печатай...',
      inputClass: 'input_message',
      inputContainerClass: 'input__container_message',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const userInfoChat = CHATS.map((c) => new UserInfoChat({
      name: c.name,
      message: c.message,
    }));

    const messageChat = MESSAGES.map((message) => new Message({
      messageClass: message.messageClass,
      name: message.name,
      text: message.text,
    }));

    super( {
      inputSearch,
      inputMessage,
      userInfoChat,
      messageChat,
      srcImg,
      moreImg,
      ...props,
    });
  }

  render() {
    return this.compile(chat, this.props);
  }
}
