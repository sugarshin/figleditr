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
import * as actions from './actions';
import querySelector from './utils/querySelector';

export default class App {

  constructor(store) {
    const figletEl = querySelector('.js-figlet');
    const redux = { store, actions };

    new Result(figletEl, redux);
    new FontSelector(querySelector('.js-select'), redux);

    new ColorPicker(
      querySelector('.js-color-picker-for-color'),
      redux,
      'color'
    );
    new ColorPicker(
      querySelector('.js-color-picker-for-bg'),
      redux,
      'background'
    );

    new ImageReader(querySelector('.js-image-reader'), redux);

    new Editor(querySelector('.js-editor'), redux);
    new ResetButton(querySelector('.js-reset-button'), redux);
    new DownloadButton(querySelector('.js-download'), redux, figletEl);

    new CopyButton(querySelector('.js-copy'), redux, figletEl);

    new FontsizeSelector(querySelector('.js-fontsize-select'), redux);
    new IncremateButton(querySelector('.js-incremate-button'), redux);
    new DecremateButton(querySelector('.js-decremate-button'), redux);
  }

}
