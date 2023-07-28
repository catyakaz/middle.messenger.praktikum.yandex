import Handlebars from 'handlebars';

import Block from '../../core/Block';
import { Error404Tmpl } from './404.tmpl';
import { ErrorBlock } from '../../components/error';

const error404 = Handlebars.compile(Error404Tmpl);

export class Error404 extends Block {
  constructor(props: {}) {

    const error = new ErrorBlock({
      title: '404 ошибка',
      description: 'Упс, что-то пошло не так',
    });

    super({ error, ...props });
  }

  render() {
    return this.compile(error404, this.props);
  }
}
