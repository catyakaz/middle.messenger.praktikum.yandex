import Handlebars from 'handlebars';
import template from './login.tmpl';
import '../../components/form';
import '../../components/button';
import '../../components/input';
import '../../components/linkButton';
import './styles.scss';

const login = Handlebars.compile(template);

const compiledFormData = Handlebars.compile('{{>form title="Вход"}}');
const htmlContainer = compiledFormData({ formData: login });

export default htmlContainer;
