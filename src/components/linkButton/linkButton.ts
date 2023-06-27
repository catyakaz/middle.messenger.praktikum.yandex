import Handlebars from 'handlebars';

import { LinkButtonTmpl } from './linkButton.tmpl';
import Block from '../../utils/Block';
import './styles.scss';

interface LinkButtonProps {
  linkClass?: string,
  href: string,
  linkText: string
}

const linkButton = Handlebars.compile(LinkButtonTmpl);

export class LinkButton extends Block {
  constructor(props: LinkButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(linkButton, this.props);
  }
}
