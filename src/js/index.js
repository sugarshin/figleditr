import 'babel-core/polyfill';
import 'whatwg-fetch';
import Promise from 'bluebird';
import html2canvas from 'html2canvas';

import App from './app';
import configureStore from './store/configureStore';
import { initialState } from './constants';
import querySelector from './utils/querySelector';

global.Promise = global.Promise || Promise;
global.html2canvas = global.html2canvas || html2canvas;

const store = configureStore(initialState);
new App(store);

querySelector('.js-open-setting').addEventListener('click', ev => {
  ev.currentTarget.classList.toggle('opend');
  querySelector('.js-settings').classList.toggle('visible');
});
