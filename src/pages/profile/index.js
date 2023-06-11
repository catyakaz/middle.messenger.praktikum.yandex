import Handlebars from 'handlebars';
import template from './profile.tmpl';
import '../../components/form';
import '../../components/button';
import '../../components/input';
import '../../components/linkButton';
import './styles.scss';

const profile = Handlebars.compile(template);

const compiledFormData = Handlebars.compile('{{>form title=""}}');
const htmlContainer = compiledFormData({ formData: profile });

export default htmlContainer;
