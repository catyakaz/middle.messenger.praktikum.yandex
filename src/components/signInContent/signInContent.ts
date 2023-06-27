import Handlebars from 'handlebars';

import Block from '../../utils/Block';
import { Button } from '../button';
import { Input } from '../input';
import { LinkButton } from '../linkButton';

import './styles.scss';

import { SignInContentTmpl } from './signInContent.tmpl';
import { blur, focus, handleSubmit } from '../../utils/validate';

const signIn = Handlebars.compile(SignInContentTmpl);

export class SignInContent extends Block {
  constructor(props: {}) {
    const button = new Button({
      buttonClass: 'button_purple',
      buttonText: 'Зарегистрироваться',
      events: {
        click: (e) => handleSubmit(e),
      },
    });

    const inputLogin = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Логин',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPassword = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputPhone = new Input({
      name: 'phone',
      type: 'phone',
      placeholder: 'Телефон',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputEmail = new Input({
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputFirstName = new Input({
      name: 'first_name',
      type: 'text',
      placeholder: 'Имя',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const inputSecondName = new Input({
      name: 'second_name',
      type: 'text',
      placeholder: 'Фамилия',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
    });

    const linkButton = new LinkButton({
      linkText:'Уже есть аккаунт?',
      href: '/login',
    });

    super( {
      button,
      inputLogin,
      inputPassword,
      inputEmail,
      inputFirstName,
      inputSecondName,
      inputPhone,
      linkButton,
      ...props });
  }

  render() {
    return this.compile(signIn, this.props);
  }
}
