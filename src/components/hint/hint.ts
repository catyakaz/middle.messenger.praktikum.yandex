import Block from '../../core/Block';
import { StoreApp } from '../../core/Store';
import { deleteChat } from '../../controllers/ChatsControllers';
import { Button } from '../button';
import './styles.scss';
import Handlebars from 'handlebars';
import { HintTmpl } from './hint.tmpl';

const hint = Handlebars.compile(HintTmpl);

export class Hint extends Block {
  protected init() {
    this.children.addUser = new Button({
      type: 'button',
      buttonText: 'Добавить пользователя',
      buttonClass: 'hint__button',
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: { addUsers: true },
          });

          this.props.open = false;
        },
      },
    });

    this.children.deleteUser = new Button({
      type: 'button',
      buttonText: 'Удалить пользователя',
      buttonClass: 'hint__button',
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: { deleteUsers: true },
          });
        },
      },
    });

    this.children.deleteChat = new Button({
      type: 'button',
      buttonText: 'Удалить чат',
      buttonClass: 'hint__button',
      events: {
        click: () => {
          const chatId = StoreApp.getState().selectedChat!.id!;

          deleteChat({ chatId }).then();
        },
      },
    });
  }

  render() {
    return this.compile(hint, this.props);
  }
}
