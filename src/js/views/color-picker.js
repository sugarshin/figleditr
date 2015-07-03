import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class ColorPicker {

  constructor(el, opts) {
    this.el = el;
    this.opts = opts;
    this._Target = this.__upcaseFirstLetter(opts.target);

    store.addChangeListener(this._handleChangeStore.bind(this));

    this._boundHandleChange = this._handleChange.bind(this);
    this.addChangeEvent();
  }

  addChangeEvent() {
    this.el.addEventListener('change', this._boundHandleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this._boundHandleChange);
  }

  _handleChange(ev) {
    actions[`change${this._Target}`](ev.target.value);
  }

  _handleChangeStore(type) {
    switch(type) {
      case FETCH_DATA:
        this._setValue();
        break;

      case RESET_DATA:
        this._setDefault();
        break;

      default:
        // noop
    }
  }

  _setValue() {
    const value = store.get(this.opts.target);
    if (/data\:image\//.test(value)) return;
    this.el.value = value;
  }

  _setDefault() {
    this.el.value = DEFAULT_STATE[this.opts.target];
  }

  __upcaseFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

}
