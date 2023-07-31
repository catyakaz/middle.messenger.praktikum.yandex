import Handlebars from 'handlebars';

import { ErrorTmpl } from './error.tmpl';
import Block from '../../core/Block';
import { LinkButton } from '../linkButton';

import './styles.scss';

interface ErrorProps {
  title: string,
  description: string
}

const error = Handlebars.compile(ErrorTmpl);

export class ErrorBlock extends Block {
  constructor(props: ErrorProps) {

    const linkButton = new LinkButton({
      linkText:'Назад к чатам',
      href: '/',
      linkClass: 'link_purple',
    });

    super({ linkButton, ...props });
  }

  render() {
    return this.compile(error, this.props);
  }
}
