import Handlebars from 'handlebars';

import { UserInfoChatTmpl } from './userInfoChat.tmpl';
import Block from '../../core/Block';

import './styles.scss';
import { withStore } from '../../core/withStore';
interface UserInfoChatProps {
  name: string,
  message?: string
}

const userInfoChat = Handlebars.compile(UserInfoChatTmpl);

export class UserInfoChatComponent extends Block {
  constructor(props: UserInfoChatProps) {

    super({ ...props });
  }


  render() {
    return this.compile(userInfoChat, this.props);
  }
}

export const UserInfoChat = withStore(UserInfoChatComponent);
