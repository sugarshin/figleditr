import throttle from 'lodash.throttle';

import { actions, store } from '../flux';
import { ActionTypes } from '../constants';

const { FETCH_DATA } = ActionTypes;

export default class Editor {

  constructor(el) {
    this.el = el;

    this._throttledHandleInput = throttle(this._handleInput, 500);
    this.addInputEvent();

    store.addChangeListener(this._handleChangeStore.bind(this));

    this.el.focus();
  }

  addInputEvent() {
    this.el.addEventListener('input', this._throttledHandleInput);
  }

  rmInputEvent() {
    this.el.removeEventListener('input', this._throttledHandleInput);
  }

  _handleInput(ev) {
    actions.inputText(ev.target.value);
  }

  _handleChangeStore(type) {
    switch(type) {
      case FETCH_DATA:
        this._initializeValue();
        break;

      default:
        // noop
    }
  }

  _initializeValue() {
    this.el.value = store.get('text');
  }
}
