import throttle from 'lodash.throttle';

import BaseView from './base-view';

export default class Editor extends BaseView {

  constructor(el, redux) {
    super(el, redux);

    this._initializeValue();

    this.handleInput = throttle(this.handleInput.bind(this), 500);
    this.addInputEvent();

    this.el.focus();
  }

  addInputEvent() {
    this.el.addEventListener('input', this.handleInput);
  }

  rmInputEvent() {
    this.el.removeEventListener('input', this.handleInput);
  }

  handleInput(ev) {
    const { store, actions } = this.redux;
    store.dispatch(actions.inputText(ev.target.value));
  }

  _initializeValue() {
    this.el.value = this.select(this.redux.store.getState(), 'text');
  }

}
