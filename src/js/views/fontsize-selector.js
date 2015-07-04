import { actions, store } from '../flux';
import {
  ActionTypes,
  DEFAULT_STATE,
  MAX_FONT_SIZE,
  MIN_FONT_SIZE
} from '../constants';

import { name } from '../../../package';

const { FETCH_DATA, RESET_DATA, CHANGE_SIZE } = ActionTypes;

export default class FontSelector {

  constructor(el) {
    this.el = el;

    this._createOptions();
    this.addChangeEvent();

    store.addChangeListener(this._handleChangeStore.bind(this));
  }

  addChangeEvent() {
    this.el.addEventListener('change', this._handleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this._handleChange);
  }

  _handleChange(ev) {
    const val = parseInt(ev.target.value, 10);
    actions.changeSize(val);
  }

  _handleChangeStore(type) {
    switch(type) {
      case FETCH_DATA:
        this._setSize();
        break;

      case RESET_DATA:
        this._setDefaultSize();
        break;

      case CHANGE_SIZE:
        this._setSize();
        break;

      default:
        // noop
    }
  }

  _setSize() {
    this.el.value = store.get('size');
  }

  _setDefaultSize() {
    this.el.value = DEFAULT_STATE.size;
  }

  _createOptions() {
    Array.from({length: MAX_FONT_SIZE + 1}, (v, k) => {
      if (k >= MIN_FONT_SIZE) return k;
    })
    .filter(v => v)
    .forEach(size => {
      let option = document.createElement('option');
      option.setAttribute('value', size);
      option.textContent = `${size}px`;
      this.el.appendChild(option);
    });
  }

}
