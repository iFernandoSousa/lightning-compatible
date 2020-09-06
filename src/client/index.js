import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import cApp from 'c/app';

const app = createElement('c-app', { is: cApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
