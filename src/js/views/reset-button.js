import BaseView from './base-view';

export default class ResetButton extends BaseView {

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
    if (confirm('Are you sure ?')) {
      const { store, actions } = this.redux;
      store.dispatch(actions.resetAppearance());
    }
  }

}
