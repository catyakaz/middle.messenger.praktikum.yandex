import Handlebars from 'handlebars';

import './styles.scss';
import Block from '../../utils/Block';
import { SignInTmpl } from './signin.tmpl';
import { SignInContent } from '../../components/signInContent';

const signIn = Handlebars.compile(SignInTmpl);

export class SignIn extends Block {
  constructor(props: {}) {
    const signInContent = new SignInContent({});

    super({ signInContent, title: 'Регистрация', ...props });
  }

  render() {
    return this.compile(signIn, this.props);
  }
}
