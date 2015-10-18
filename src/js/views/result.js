import figlet from 'figlet';

import BaseView from './base-view';

export default class Result extends BaseView {

  constructor(el, redux) {
    super(el, redux);

    this._configureDOM();
    this.update();
    this.addChangeStateListener(this.handleChangeStore.bind(this));
  }

  _configureDOM() {
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    pre.appendChild(code);
    this.el.appendChild(pre);
    this.codeEl = code;
  }

  update() {
    const { text, font, color, background, size } = this.redux.store.getState();

    if (text !== this._currentText ||
        font !== this._currentFont) {
      this._changeFiglet(text, font);
    }

    if (color !== this._currentColor) {
      this._changeColor(color);
    }

    if (size !== this._currentSize) {
      this._changeSize(size);
    }

    if (background !== this._currentBackground) {
      this._changeBackground(background);
    }
  }

  handleChangeStore() {
    this.update();
  }

  _changeFiglet(text, font) {
    figlet(text, {
      font//,
      // horizontalLayout: 'default',
      // verticalLayout: 'default'
    }, (err, data) => {
      if (err) {
        return console.log(err);
      }

      this._currentText = text;
      this._currentFont = font;
      this.codeEl.textContent = data;
    });
  }

  _changeColor(color) {
    this._currentColor = color;
    this.codeEl.style.color = color;
  }

  _changeSize(size) {
    this._currentSize = size;
    this.codeEl.style.fontSize = `${size}px`;
  }

  _changeBackground(background) {
    const value = /data\:image\//.test(background) ?
      `url(${background})` : background;

    this._currentBackground = background;
    this.el.style.background = value;
  }

}
