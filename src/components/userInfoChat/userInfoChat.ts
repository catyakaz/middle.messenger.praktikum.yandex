import Handlebars from 'handlebars';

import { UserInfoChatTmpl } from './userInfoChat.tmpl';
import Block from '../../utils/Block';

import './styles.scss';

interface UserInfoChatProps {
  name: string,
  message: string
}

const userInfoChat = Handlebars.compile(UserInfoChatTmpl);

export class UserInfoChat extends Block {
  constructor(props: UserInfoChatProps) {

    super({ ...props });
  }

  render() {
    return this.compile(userInfoChat, this.props);
  }
}
