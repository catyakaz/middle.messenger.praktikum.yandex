import Handlebars from 'handlebars';

import './styles.scss';
import Block from '../../core/Block';
import { LoginTmpl } from './login.tmpl';
import { LoginContent } from '../../components/loginContent';

const login = Handlebars.compile(LoginTmpl);

export class Login extends Block {
  constructor(props: {}) {
    const loginContent = new LoginContent({});

    super({ loginContent, title: 'Войти', ...props });
  }

  render() {
    return this.compile(login, this.props);
  }
}
