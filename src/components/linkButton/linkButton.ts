import Handlebars from 'handlebars';

import { LinkButtonTmpl } from './linkButton.tmpl';
import Block from '../../core/Block';
import { withRouter } from '../../routing/withRouter';
import './styles.scss';

interface LinkButtonProps {
  linkClass?: string,
  linkText: string,
  content: string,
  events?: { click: (e: Event) => void };
}

const linkButton = Handlebars.compile(LinkButtonTmpl);

export class LinkButtonComponent extends Block {
  constructor(props: LinkButtonProps) {
    super({ ...props });
  }

  render() {
    console.log('props', this.props);
    return this.compile(linkButton, this.props);
  }
}

export const LinkButton = withRouter(LinkButtonComponent);
