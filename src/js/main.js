import 'babel/polyfill';
import 'whatwg-fetch';

import Result from './views/result';
import FontSelector from './views/font-selector';
import ColorPicker from './views/color-picker';
import ImageReader from './views/image-reader';
import Editor from './views/editor';
import ResetButton from './views/reset-button';
import DownloadButton from './views/download-button';
import CopyButton from './views/copy-button';
import FontsizeSelector from './views/fontsize-selector';
import IncremateButton from './views/incremate-button';
import DecremateButton from './views/decremate-button';
import { actions } from './flux';

const querySelector = (selector) => {
  return document.querySelector(selector);
};

const figletEl = querySelector('.js-figlet');

new Result(figletEl);
new FontSelector(querySelector('.js-select'));

new ColorPicker(
  querySelector('.js-color-picker-for-color'),
  {target: 'color'}
);
new ColorPicker(
  querySelector('.js-color-picker-for-bg'),
  {target: 'background'}
);

new ImageReader(querySelector('.js-image-reader'));

new Editor(querySelector('.js-editor'));
new ResetButton(querySelector('.js-reset-button'));
new DownloadButton(querySelector('.js-download'), figletEl);

new CopyButton(querySelector('.js-copy'), figletEl);

new FontsizeSelector(querySelector('.js-fontsize-select'));
new IncremateButton(querySelector('.js-incremate-button'));
new DecremateButton(querySelector('.js-decremate-button'));

actions.fetchData();



// WIP
querySelector('.js-open-setting').addEventListener('click', ev => {
  ev.currentTarget.classList.toggle('opend');
  querySelector('.js-settings').classList.toggle('visible');
});
