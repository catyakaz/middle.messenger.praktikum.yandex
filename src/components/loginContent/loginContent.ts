import Handlebars from 'handlebars';

import Block from '../../utils/Block';
import { Button } from '../button';
import { Input } from '../input';
import { LinkButton } from '../linkButton';
import { focus, blur, handleSubmit } from '../../utils/validate';

import './styles.scss';

import { LoginContentTmpl } from './loginContent.tmpl';

const login = Handlebars.compile(LoginContentTmpl);

export class LoginContent extends Block {
  constructor(props: {}) {
    const button = new Button({
      buttonClass: 'button_purple',
      buttonText: 'Войти',
      events: {
        click: (e) => handleSubmit(e),
      },
    });

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
      href: '/signin',
    });

    super( {
      button,
      inputLogin,
      inputPassword,
      linkButton,
      ...props });
  }

  render() {
    return this.compile(login, this.props);
  }
}
