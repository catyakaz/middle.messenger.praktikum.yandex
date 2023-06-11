import Handlebars from 'handlebars';
import template from './500.tmpl';
import '../../components/error';

const compiled = Handlebars.compile(template);

const data = {
  title: '500 ошибка',
  description: 'Мы уже фиксим',
};

const html = compiled(data);

export default html;
