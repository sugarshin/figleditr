import { actions } from '../flux';

export default class ResetButton {

  constructor(el) {
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
    actions.reset();
  }

}
