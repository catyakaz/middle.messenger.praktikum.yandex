import Handlebars from 'handlebars';
import './styles.scss';

import { Input } from '../../components/input';
import { UserInfoChat } from '../../components/userInfoChat';
import srcImg from '../../../static/icon/edit-profile-icon.png';
import { getChatUsers } from '../../controllers/ChatsControllers';

import './styles.scss';
import Block from '../../core/Block';
import { ChatTmpl } from './chat.tmpl';
import { Button } from '../../components/button';
import { PopupAddNewChat } from '../../components/popupAddNewChat';
import { withStore } from '../../core/withStore';
import { StoreApp } from '../../core/Store';
import { ChatContent } from '../../components/chatContent';
import { PopupAddUser } from '../../components/popupAddUser';
import { ChatList } from '../../types';

const chat = Handlebars.compile(ChatTmpl);

export class ChatComponent extends Block {
  constructor(props: {}) {

    super( {
      srcImg,
      ...props,
    });
  }

  init() {
    this.children.inputSearch = new Input({
      name: 'search',
      type: 'search',
      placeholder: 'Поиск...',
      inputClass: 'input_search',
    });


    this.children.chatContent = new ChatContent({});

    this.children.buttonCreateChat = new Button({
      buttonClass: 'chat__button_create',
      buttonText: 'Создать чат',
      events: {
        click: () => {
          StoreApp.dispatch({ popups: { newChat: true }, openedNewChat: true });
        },
      },
    });

    this.children.modalAddUser = new PopupAddUser({});
    this.children.modalNewChat =  new PopupAddNewChat({})  ;
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.userInfoChat = newProps.chatList?.map((c: ChatList) => {
      return new UserInfoChat({
        name: c.title,
        events: {
          click: () => {
            getChatUsers(c.id);

            StoreApp.dispatch({
              selectedChat: {
                title: c.title,
                id: c.id,
              },
            });
          },
        },
      });
    });

    return true;
  }

  render() {
    return this.compile(chat, this.props);
  }
}

export const Chat = withStore(ChatComponent);
