import './styles.scss';

import Handlebars from 'handlebars';
import messageTmpl from './message.tmpl';

Handlebars.registerPartial('message', messageTmpl);
