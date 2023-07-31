import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { StoreApp } from '../../core/Store';
import { addUser, deleteUser } from '../../controllers/ChatsControllers';
import { Button } from '../button';
import { SearchUserTmpl } from './searchUser.tmpl';

const searchUser = Handlebars.compile(SearchUserTmpl);
export class SearchUser extends Block {
  constructor(props: {}) {
    super({ ...props });
  }

  init() {
    this.children.button = new Button({
      buttonText: this.props.btnName,
      buttonClass: 'popup__add_user_button',
      events: {
        click: (evt) => {
          evt.preventDefault();

          const data = {
            users: [this.props!.id!],
            chatId: StoreApp.getState().selectedChat!.id!,
          };

          if (this.props.btnName === 'Добавить') {
            addUser(data).then();
          } else {
            deleteUser(data).then();
          }
        },
      },
    });
  }

  render() {

    return this.compile(searchUser, this.props);
  }
}
