import 'babel-polyfill';
import 'whatwg-fetch';
import Promise from 'bluebird';
import html2canvas from 'html2canvas';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';
import querySelector from './utils/querySelector';

global.Promise = global.Promise || Promise;
global.html2canvas = global.html2canvas || html2canvas;

const store = configureStore();

render(
  <Provider store={store}><App /></Provider>,
  querySelector('.root')
);
