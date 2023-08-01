import Handlebars from 'handlebars';

import { ErrorTmpl } from './error.tmpl';
import Block from '../../core/Block';
import { LinkButton } from '../linkButton';

import './styles.scss';
import Router from '../../routing/Router';

interface ErrorProps {
  title: string,
  description: string
}

const error = Handlebars.compile(ErrorTmpl);

export class ErrorBlock extends Block {
  constructor(props: ErrorProps) {

    const linkButton = new LinkButton({
      linkText:'Назад к чатам',
      linkClass: 'link_purple',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          Router.go('/messenger');
        },
      },
    });

    super({ linkButton, ...props });
  }

  render() {
    return this.compile(error, this.props);
  }
}
