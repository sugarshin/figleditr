import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class DecremateButton {

  constructor(el, opts) {
    this.el = el;

    this.addClickEvent();
  }

  addClickEvent() {
    this.el.addEventListener('click', this._handleClick);
  }

  rmClickEvent() {
    this.el.removeEventListener('click', this._handleClick);
  }

  _handleClick() {
    const current = store.get('size');
    if (current > 9) {
      const size = current - 1;
      actions.changeSize(size);
    }
  }

}
