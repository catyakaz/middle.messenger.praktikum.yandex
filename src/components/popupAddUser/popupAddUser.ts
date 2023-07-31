import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { StoreApp } from '../../core/Store';
import { withStore } from '../../core/withStore';
import { searchUser } from '../../controllers/UsersControllers';
import { Button } from '../button';
import { SearchUser } from '../searchUser';
import { Input } from '../input';
import './styles.scss';
import { PopupAddUserTmpl } from './popupAddUser.tmpl';

const popupAddUser = Handlebars.compile(PopupAddUserTmpl);

class PopupAddUserComponent extends Block {
  init() {
    this.children.inputSearchUser = new Input({
      type: 'text',
      name: 'searchUser',
      placeholder: 'Введите логин',
      inputClass: 'popup__input_search_user',
    });

    this.children.buttonSearch = new Button({
      buttonText: 'Поиск',
      type: 'submit',
      buttonClass: 'popup__button_search',
      events: {
        click: (evt) => {
          evt.preventDefault();

          const input = document.querySelector('.popup__input_search_user') as HTMLInputElement;
          const { value } = input;

          if (value.length > 1) {
            searchUser({ login: value }).finally(() => {
              const users = StoreApp.getState().foundUsers;

              if (users.length > 0) {
                this.setProps({ isSearch: true, error: false });
              } else {
                this.setProps({ error: true, isSearch: false });
              }
            });
          }
        },
      },
    });

    this.children.buttonClose = new Button({
      type: 'button',
      buttonClass: 'popup__close',
      events: {
        click: (evt) => {
          evt.preventDefault();

          this.setProps({ isSearch: false });

          StoreApp.dispatch({ popups: { addUsers: false } });
        },
      },
    });
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.searchList = newProps.foundUsers.map((data: any) => {
      return new SearchUser({
        ...data,
        btnName: 'Добавить',
      });
    });

    return true;
  }

  render() {
    return this.compile(popupAddUser, this.props);
  }
}

export const PopupAddUser = withStore(PopupAddUserComponent);
