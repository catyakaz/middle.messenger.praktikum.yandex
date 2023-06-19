import Handlebars from 'handlebars';
import template from './signin.tmpl';
import '../../components/form';

const signin = Handlebars.compile(template);

const compiledFormData = Handlebars.compile('{{>form title="Регистрация"}}');
const htmlContainer = compiledFormData({ formData: signin });

export default htmlContainer;
