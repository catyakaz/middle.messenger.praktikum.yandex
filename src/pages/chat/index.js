import Handlebars from 'handlebars';
import './styles.scss';

import template from './chat.tmpl';
import '../../components/input';
import '../../components/userInfoChat';
import '../../components/message';
import srcImg from './img/edit-profile-icon.png';
import moreImg from './img/more-icon.png';
import { CHAT_NAMES, MESSAGES } from './stub_messages';

const compiled = Handlebars.compile(template);

const data = {
  userInfoChatList: CHAT_NAMES,
  srcImg,
  moreImg,
  messageList: MESSAGES
};

const html = compiled(data);

export default html;
