import assign from 'object-assign';
import figlet from 'figlet';

import { store } from '../flux';
import { ActionTypes } from '../constants';

const {
  FETCH_DATA,
  INPUT_TEXT,
  CHANGE_FONT,
  CHANGE_COLOR,
  CHANGE_BACKGROUND,
  CHANGE_SIZE,
  RESET_DATA
} = ActionTypes;

export default class Result {

  constructor(el) {
    let pre = document.createElement('pre');
    let code = document.createElement('code');
    pre.appendChild(code);
    el.appendChild(pre);
    this.codeEl = code;
    this.el = el;

    this.state = store.getAll();

    store.addChangeListener(this._handleChangeStore.bind(this));
  }

  setState(updates) {
    this.state = assign({}, this.state, updates);
  }

  _handleChangeStore(type) {

    switch(type) {

      case FETCH_DATA:
        this.setState(store.getAll());
        this._updateAll();
        break;

      case RESET_DATA:
        const { font, color, background, size } = store.getAll();
        this.setState({ font, color, background, size });
        this._updateAll();
        break;

      case INPUT_TEXT:
        this.setState({
          text: store.get('text')
        });
        this._update();
        break;

      case CHANGE_FONT:
        this.setState({
          font: store.get('font')
        });
        this._update();
        break;

      case CHANGE_COLOR:
        this.setState({
          color: store.get('color')
        });
        this._changeColor();
        break;

      case CHANGE_BACKGROUND:
        this.setState({
          background: store.get('background')
        });
        this._changeBackground();
        break;

      case CHANGE_SIZE:
        this.setState({
          size: store.get('size')
        });
        this._changeSize();
        break;

      default:
        // noop

    }

  }// _handleChangeStore

  _update() {
    const { text, font } = this.state;
    figlet(text, {
      font: font//,
      // horizontalLayout: 'default',
      // verticalLayout: 'default'
    }, (err, data) => {
      if (err) {
        return console.dir(err);
      }
      this.codeEl.textContent = data;
    });
  }

  _changeColor() {
    const { color } = this.state;
    this.codeEl.style.color = color;
  }

  _changeBackground() {
    const { background } = this.state;
    this.el.style.background = background;
  }

  _changeSize() {
    const { size } = this.state;
    this.codeEl.style.fontSize = `${size}px`;
  }

  _updateAll() {
    this._update();
    this._changeColor();
    this._changeBackground();
    this._changeSize();
  }

}
