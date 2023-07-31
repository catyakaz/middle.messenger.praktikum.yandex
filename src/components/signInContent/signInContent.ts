import Handlebars from 'handlebars';

import Block from '../../core/Block';
import { Button } from '../button';
import { Input } from '../input';
import { LinkButton } from '../linkButton';
import { signUp } from '../../controllers/AuthController';

import './styles.scss';

import { SignInContentTmpl } from './signInContent.tmpl';
import { blur, focus, handleSubmit } from '../../utils/validate';
import { SignUpData } from '../../types';
import Router from '../../routing/Router';

const signIn = Handlebars.compile(SignInContentTmpl);

export class SignInContent extends Block {
  constructor(props: {}) {

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
      events: {
        click: (e: Event) => {
          e.preventDefault();
          Router.go('/');
        },
      },
    });

    super( {
      inputLogin,
      inputPassword,
      inputEmail,
      inputFirstName,
      inputSecondName,
      inputPhone,
      linkButton,
      ...props });
  }

  init() {
    this.children.button = new Button({
      buttonClass: 'button_purple',
      buttonText: 'Зарегистрироваться',
      events: {
        click: (evt) => this.onSubmit(evt),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt) as SignUpData;

    console.log(data);
    if (data) {
      const newData = {
        first_name: data.first_name,
        second_name: data.second_name,
        login: data.login,
        email: data.email,
        password: data.password,
        phone: data.phone,
      };

      signUp(newData).then();
    }
  }

  render() {
    return this.compile(signIn, this.props);
  }
}
