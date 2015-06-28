import html2canvas from 'html2canvas';
import debounce from 'lodash.debounce';

import { store } from '../flux';

global.html2canvas = html2canvas;

export default class DownloadButton {

  constructor(el, target) {
    this.el = el;
    this.target = target;

    this._debouncedHandleChangeStore = debounce(this._handleChangeStore, 1000);

    store.addChangeListener(this._debouncedHandleChangeStore.bind(this));
  }

  _handleChangeStore() {
    this._updateDownloadURL();
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
