import html2canvas from 'html2canvas';
import debounce from 'lodash.debounce';

import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

global.html2canvas = html2canvas;

const {
  FETCH_DATA,
  INPUT_TEXT,
  CHANGE_FONT,
  CHANGE_COLOR,
  CHANGE_BACKGROUND,
  RESET_DATA
} = ActionTypes;

export default class DownloadButton {

  constructor(el, target) {
    this.el = el;
    this.target = target;

    this._debouncedHandleChangeStore = debounce(this._handleChangeStore, 1000);

    store.addChangeListener(this._debouncedHandleChangeStore.bind(this));
  }

  _handleChangeStore() {
    this._updateDownloadURL()
  }

  _updateDownloadURL() {
    html2canvas(this.target)
      .then(canvas => {
        let url = canvas.toDataURL();
        this.el.setAttribute('href', url);
      })
      .catch(err => {
        console.dir(err);
      });
  }

}
