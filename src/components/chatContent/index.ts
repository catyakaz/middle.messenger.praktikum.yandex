import Handlebars from 'handlebars';
import Block from '../../core/Block';

import moreImg from './img/more-icon.png';
import { withStore } from '../../core/withStore';
import { Message } from '../message';
import { Input } from '../input';
import { blur, focus } from '../../utils/validate';

import { ChatUsers } from '../../types';
import { Button } from '../button';
import { PopupDeleteUser } from '../popupDeleteUser';
import { sendMessage } from '../../controllers/MessagesControllers';
import { getChats } from '../../controllers/ChatsControllers';
import './styles.scss';
import { ChatContentTmpl } from './chatContent.tmpl';
import { StoreApp } from '../../core/Store';
import { Header } from '../header';
import { Message as IMessage } from '../../types';

const chatContent = Handlebars.compile(ChatContentTmpl);

export class ChatContentComponent extends Block {
  constructor(props: {}) {
    super({ moreImg, ...props });
  }

  init() {
    getChats().then();

    this.children.sendMessageButton = new Button({
      buttonClass: 'chat__send_message_button',
      events: {
        click:() => {
          this.onSubmit();
        },
      },
    });

    this.children.inputMessage = new Input({
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

    this.children.modalDeleteUser = new PopupDeleteUser({ chatUsers: [] });
  }


  onSubmit() {
    const input = document.querySelector('.input_message') as HTMLInputElement;

    let { value } = input;

    if (value.length > 0) {
      const chatId = StoreApp.getState().selectedChat!.id!;

      sendMessage(chatId, value);

      getChats().then();
    }
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    const { messageList, selectedChat, chatUsers, user } = newProps;
    const { title, id } = selectedChat;

    if (id) {
      this.children.messageChat = messageList[id].map((message: IMessage) => {
        return new Message({
          messageClass: newProps.user.id === message.user_id ?
            'message__user_type_auth' : 'message__user_type_notAuth',
          text: message.content,
        });
      });

      const usersInChat = chatUsers.map((userInChat: ChatUsers)  => userInChat.login).join(', ');
      const usersList = chatUsers.filter((el: ChatUsers) => el.login !== user.login);

      this.children.header = new Header({ title, usersInChat });
      this.children.modalDeleteUser.setProps({ chatUsers: usersList });
    }

    return true;
  }

  render() {
    return this.compile(chatContent, this.props);
  }
}

export const ChatContent = withStore(ChatContentComponent);
