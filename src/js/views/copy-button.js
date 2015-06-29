import ZeroClipboard from 'zeroclipboard';

ZeroClipboard.config({
  swfPath: 'ZeroClipboard.swf'
});

export default class CopyButton {

  constructor(el, target) {
    this.el = el;
    this.target = target;
    this.zeroclipboard = new ZeroClipboard(el)
      .on('beforecopy', () => {
        const text = this.target.textContent;
        this.el.setAttribute('data-clipboard-text', text);
      });
  }

}
