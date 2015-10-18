import html2canvas from 'html2canvas';
import debounce from 'lodash.debounce';

import BaseView from './base-view';

export default class DownloadButton extends BaseView {

  constructor(el, redux, target) {
    super(el, redux);

    this.target = target;

    this._updateDownloadURL = debounce(this._updateDownloadURL, 1000);
    this.addChangeStateListener(this.handleChangeState.bind(this));
  }

  handleChangeState() {
    this._updateDownloadURL();
  }

  _updateDownloadURL() {
    (async () => {
      try {
        const canvas = await html2canvas(this.target);
        this.el.setAttribute('href', canvas.toDataURL());
      } catch (err) {
        console.log('DownloadButton#_updateDownloadURL:\n', err);
      }
    })();
  }

}
