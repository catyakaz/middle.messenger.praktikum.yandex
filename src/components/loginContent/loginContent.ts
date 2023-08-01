import Handlebars from 'handlebars';

import Block from '../../core/Block';
import { Button } from '../button';
import { Input } from '../input';
import { LinkButton } from '../linkButton';
import { focus, blur, handleSubmit } from '../../utils/validate';
import { signIn } from '../../controllers/AuthController';

import './styles.scss';

import { LoginContentTmpl } from './loginContent.tmpl';
import { SignInData } from '../../types';
import Router from '../../routing/Router';

const login = Handlebars.compile(LoginContentTmpl);

export class LoginContent extends Block {
  constructor(props: {}) {

    const inputLogin = new Input({
      name:'login',
      type:'text',
      placeholder:'Логин',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
      error: 'Некорректный логин',
    });

    const inputPassword = new Input({
      name: 'password',
      type: 'password',
      events: {
        focusin: (e) => focus(e),
        focusout:(e) => blur(e),
      },
      placeholder: 'Пароль',
    });

    const linkButton = new LinkButton({
      linkText:'Нет аккаунта?',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          Router.go('/signin');
        },
      },
    });

    super( {
      inputLogin,
      inputPassword,
      linkButton,
      ...props });
  }

  init() {
    this.children.button = new Button({
      buttonClass: 'button_purple',
      buttonText: 'Войти',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(evt: Event) {
    evt.preventDefault();

    const data = handleSubmit(evt) as SignInData;

    if (data) {
      signIn(data).then();
    }
  }

  render() {
    return this.compile(login, this.props);
  }
}
