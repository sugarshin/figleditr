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

const figletEl = document.querySelector('.js-figlet');

new Result(figletEl);
new FontSelector(document.querySelector('.js-select'));

new ColorPicker(
  document.querySelector('.js-color-picker-for-color'),
  {target: 'color'}
);
new ColorPicker(
  document.querySelector('.js-color-picker-for-bg'),
  {target: 'background'}
);

new ImageReader(document.querySelector('.js-image-reader'));

new Editor(document.querySelector('.js-editor'));
new ResetButton(document.querySelector('.js-reset-button'));
new DownloadButton(
  document.querySelector('.js-download'),
  figletEl
);

new CopyButton(
  document.querySelector('.js-copy'),
  figletEl
);

new FontsizeSelector(document.querySelector('.js-fontsize-select'));
new IncremateButton(document.querySelector('.js-incremate-button'));
new DecremateButton(document.querySelector('.js-decremate-button'));

actions.fetchData();



// WIP
document.querySelector('.js-open-setting').addEventListener('click', ev => {
  ev.currentTarget.classList.toggle('opend');
  document.querySelector('.js-settings').classList.toggle('visible');
});
