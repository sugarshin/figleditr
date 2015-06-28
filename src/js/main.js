import Result from './views/result';
import FontSelector from './views/font-selector';
import ColorPicker from './views/color-picker';
import Editor from './views/editor';
import ResetButton from './views/reset-button';
import DownloadButton from './views/download-button';
import { actions } from './flux';

let figletEl = document.querySelector('.js-figlet');

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

new Editor(document.querySelector('.js-editor'));
new ResetButton(document.querySelector('.js-reset-button'));
new DownloadButton(
  document.querySelector('.js-download'),
  figletEl
);

actions.fetchData();
