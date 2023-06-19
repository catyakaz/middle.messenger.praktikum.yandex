import './styles.scss';

import Handlebars from 'handlebars';
import errorTmpl from './error.tmpl';

Handlebars.registerPartial('error', errorTmpl);
