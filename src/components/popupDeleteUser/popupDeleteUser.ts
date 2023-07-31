import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { StoreApp } from '../../core/Store';
import { withStore } from '../../core/withStore';
import { Button } from '../button';
import { SearchUser } from '../searchUser';
import './styles.scss';

import { PopupDeleteUserTmpl } from './popupDeleteUser.tmpl';

const popupDeleteUser = Handlebars.compile(PopupDeleteUserTmpl);

class PopupDeleteUserBase extends Block {
  init() {
    this.children.buttonClose = new Button({
      type: 'button',
      buttonClass: 'popup__close',
      events: {
        click: (evt) => {
          evt.preventDefault();
          StoreApp.dispatch({ popups: { deleteUsers: false } });
        },
      },
    });
  }

  protected componentDidUpdate(_oldProps: any, _newProps: any): boolean {
    this.children.chatUsersList = _newProps.chatUsers.map((data: unknown) => {
      return new SearchUser({
        ...data as object,
        btnName: 'Удалить',
      });
    });

    return true;
  }

  render() {
    return this.compile(popupDeleteUser, this.props);
  }
}

export const PopupDeleteUser = withStore(PopupDeleteUserBase);
