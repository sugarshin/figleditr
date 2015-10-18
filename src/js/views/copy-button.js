import ZeroClipboard from 'zeroclipboard';

import BaseView from './base-view';

ZeroClipboard.config({
  swfPath: 'ZeroClipboard.swf'
});

export default class CopyButton extends BaseView {

  constructor(el, redux, target) {
    super(el, redux);

    this.target = target;
    this.zeroclipboard = new ZeroClipboard(el)
      .on('beforecopy', () => {
        const text = this.target.textContent;
        this.el.setAttribute('data-clipboard-text', text);
      });
  }

}
