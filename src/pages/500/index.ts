import Handlebars from 'handlebars';

import Block from '../../core/Block';
import { Error500Tmpl } from './500.tmpl';
import { ErrorBlock } from '../../components/error';

const error500 = Handlebars.compile(Error500Tmpl);

export class Error500 extends Block {
  constructor(props: {}) {

    const error = new ErrorBlock({
      title: '500 ошибка',
      description: 'Мы уже фиксим',
    });

    super( { error, ...props });
  }

  render() {
    return this.compile(error500, this.props);
  }
}
