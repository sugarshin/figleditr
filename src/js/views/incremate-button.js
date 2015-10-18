import BaseView from './base-view';

export default class IncremateButton extends BaseView {

  constructor(el, redux) {
    super(el, redux);

    this.handleClick = this.handleClick.bind(this);
    this.addClickEvent();
  }

  addClickEvent() {
    this.el.addEventListener('click', this.handleClick);
  }

  rmClickEvent() {
    this.el.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    const { store, actions } = this.redux;
    store.dispatch(actions.incrementSize());
  }

}
