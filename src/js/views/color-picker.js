import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class ColorPicker {

  constructor(el) {
    this.el = el;

    store.addChangeListener(this._handleStoreChange.bind(this));
    this.addChangeEvent();
  }

  addChangeEvent() {
    this.el.addEventListener('change', this._handleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this._handleChange);
  }

  _handleChange(ev) {
    actions.changeColor(ev.target.value);
  }

  _handleStoreChange(type) {
    switch(type) {
      case FETCH_DATA:
        this._setColor();
        break;

      case RESET_DATA:
        this._setDefault();
        break;

      default:
        // noop
    }
  }

  _setColor() {
    this.el.value = store.get('color');
  }

  _setDefault() {
    this.el.value = DEFAULT_STATE.color;
  }

}
