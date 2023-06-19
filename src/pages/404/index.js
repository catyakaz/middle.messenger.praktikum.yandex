import Handlebars from 'handlebars';
import template from './404.tmpl';
import '../../components/error';

const compiled = Handlebars.compile(template);

const data = {
  title: '404 ошибка',
  description: 'Упс, что-то пошло не так',
};

const html = compiled(data);

export default html;
