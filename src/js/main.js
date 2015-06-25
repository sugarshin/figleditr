import Result from './views/result';
import FontSelector from './views/font-selector';
import ColorPicker from './views/color-picker';
import Editor from './views/editor';
import ResetButton from './views/reset-button';
import DownloadButton from './views/download-button';
import { actions } from './flux';

let figletEl = document.querySelector('.js-figlet');
let result = new Result(figletEl);
let fontSelector = new FontSelector(document.querySelector('.js-select'));
let color = new ColorPicker(document.querySelector('.js-color-picker'));
let editor = new Editor(document.querySelector('.js-editor'));
let resetButton = new ResetButton(document.querySelector('.js-reset-button'));
let downloadButton = new DownloadButton(
  document.querySelector('.js-download'),
  figletEl
);

actions.fetchData();
