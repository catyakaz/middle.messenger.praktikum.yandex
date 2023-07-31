import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { StoreApp } from '../../core/Store';
import { withStore } from '../../core/withStore';
import { createChats } from '../../controllers/ChatsControllers';
import { Button } from '../button';
import { Input } from '../input';

import './styles.scss';
import { PopupAddNewChatTmpl } from './popupAddNewChat.tmlp';

const popupAddNewChat = Handlebars.compile(PopupAddNewChatTmpl);

export class PopupAddNewChatComponent extends Block {
  init() {
    this.children.inputAddNewChat = new Input({
      type: 'text',
      inputContainerClass: 'popup__new_chat__input_create_chat',
      inputClass: 'popup__input_create_chat',
      name: 'input_add_new_chat',
      placeholder: 'Введите название чата',
    });

    this.children.buttonClose = new Button({
      type: 'button',
      buttonClass: 'popup__new_chat__close',
      events: {
        click: (evt) => {
          evt.preventDefault();

          this.setProps({ isSearch: false });

          StoreApp.dispatch({ popups: { newChat: false }, openedNewChat: false });
        },
      },
    });

    this.children.buttonCreateChat = new Button({
      buttonText: 'Сохранить',
      type: 'submit',
      buttonClass: 'popup__new_chat__create_chat_button',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const input = document.querySelector('.popup__input_create_chat') as HTMLInputElement;
          let { value } = input;

          if (value.length > 0) {
            createChats({ title: value }).finally(() => {
              value = '';
              StoreApp.dispatch({ popups: {} });
            });
          }
        },
      },
    });
  }

  render() {
    return this.compile(popupAddNewChat, this.props);
  }
}

export const PopupAddNewChat = withStore(PopupAddNewChatComponent);
