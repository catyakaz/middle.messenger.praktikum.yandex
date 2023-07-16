import Handlebars from 'handlebars';

import Block from '../../utils/Block';
import { Input } from '../input';
import { Button } from '../button';
import { LinkButton } from '../linkButton';

import './styles.scss';

import { ProfileContentTmpl } from './profileContent.tmpl';
import { blur, focus, handleSubmit } from '../../utils/validate';

const profileContent = Handlebars.compile(ProfileContentTmpl);

export class ProfileContent extends Block {
  constructor(props: {}) {
    const inputLogin = new Input({
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
      name: 'display_name',
      type: 'text',
      placeholder: 'Имя в аккаунте',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
    });

    const inputAvatar = new Input({
      name: 'avatar',
      type: 'url',
      placeholder: 'Аватар',
      inputClass: 'input_profile',
      inputContainerClass: 'input__container_profile',
    });

    const inputNewPassword = new Input({
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
      href: '/login',
    });

    const button = new Button({
      buttonText:'Применить',
      buttonClass: 'button_purple',
      events: {
        click: (e) => handleSubmit(e),
      },
    });

    super({
      inputFirstName,
      inputEmail,
      inputPhone,
      inputSecondName,
      inputDisplayName,
      inputLogin,
      inputNewPassword,
      inputOldPassword,
      inputAvatar,
      linkButton,
      button,
      ...props });
  }

  render() {
    return this.compile(profileContent, this.props);
  }
}
