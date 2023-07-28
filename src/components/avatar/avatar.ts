import Handlebars from 'handlebars';
import Block from '../../core/Block';

import { changeUserAvatar } from '../../controllers/UsersControllers';
import { withStore } from '../../core/withStore';

import './styles.scss';
import { Input } from '../input';
import editImg from '../../../static/icon/edit-profile-icon.png';
import { AvatarTmpl } from './avatar.tmpl';

const avatar = Handlebars.compile(AvatarTmpl);

class AvatarComponent extends Block {
  constructor(props: {}) {
    super({ editImg, ...props });
  }

  init() {
    this.children.inputAvatar = new Input({
      name: 'avatar',
      inputContainerClass: 'avatar__input_change',
      type: 'file',
      events: {
        change: (e) => this.changeImg(e),
      },
    });
  }

  changeImg(evt: Event) {
    const target = evt.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const { files } = target;
      const file = files[0];
      const formData = new FormData();

      formData.append('avatar', file);

      changeUserAvatar(formData);
    }
  }

  render() {
    return this.compile(avatar, this.props);
  }
}

export const Avatar = withStore(AvatarComponent);
