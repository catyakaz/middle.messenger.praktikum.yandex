import Handlebars from 'handlebars';

import Block from '../../core/Block';
import { Input } from '../input';
import { Button } from '../button';
import { LinkButton } from '../linkButton';
import { withStore } from '../../core/withStore';

import './styles.scss';
import { Avatar } from '../avatar';
import { ProfileContentTmpl } from './profileContent.tmpl';
import { blur, focus, handleSubmit } from '../../utils/validate';
import { logout } from '../../controllers/AuthController';
import { changeUserPassword, changeUserProfile } from '../../controllers/UsersControllers';

import { UserProfile } from '../../types';

const profileContent = Handlebars.compile(ProfileContentTmpl);

export class ProfileContentComponent extends Block {
  constructor(props: { user: UserProfile }) {

    const inputLogin = new Input({
      value: props.user.login,
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPhone = new Input({
      value: props.user.phone,
      name: 'phone',
      type: 'phone',
      placeholder: 'Телефон',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputEmail = new Input({
      value: props.user.email,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputFirstName = new Input({
      value: props.user.first_name,
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputSecondName = new Input({
      value: props.user.second_name,
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputDisplayName = new Input({
      value: props.user.display_name,
      name: 'display_name',
      type: 'text',
      placeholder: 'Имя в аккаунте',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
    });

    const inputNewPassword = new Input({
      value: props.user.newPassword,
      name: 'newPassword',
      type: 'password',
      placeholder: 'Новый пароль',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputOldPassword = new Input({
      value: props.user.oldPassword,
      name: 'oldPassword',
      type: 'password',
      placeholder: 'Старый пароль',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const linkButton = new LinkButton({
      linkText:'Выйти',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          logout();
        },
      },
    });

    super({
      name: props.user.first_name,
      inputFirstName,
      inputEmail,
      inputPhone,
      inputSecondName,
      inputDisplayName,
      inputLogin,
      inputNewPassword,
      inputOldPassword,
      linkButton,
      ...props });
  }

  init() {
    this.children.avatar = new Avatar({});
    this.children.button = new Button({
      buttonText:'Применить',
      buttonClass: 'button_purple',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt);

    if (data) {
      changeUserProfile(data);
    }

    if (data.oldPassword && data.newPassword) {
      changeUserPassword(data as UserProfile);
    }
  }

  render() {
    return this.compile(profileContent, this.props);
  }
}

export const ProfileContent = withStore(ProfileContentComponent);
