import co from 'co';
import html2canvas from 'html2canvas';
import debounce from 'lodash.debounce';

import { store } from '../flux';

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
    co(function* () {
      const canvas = yield html2canvas(this.target);
      this.el.setAttribute('href', canvas.toDataURL());
    }.bind(this))
    .catch(err => console.log('DownloadButton#_updateDownloadURL', err));
  }

}
