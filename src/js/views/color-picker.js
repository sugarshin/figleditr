import BaseView from './base-view';

export default class ColorPicker extends BaseView {

  constructor(el, redux, targetAppearance) {
    super(el, redux);

    this._target = targetAppearance;
    this._Target = this._upcaseFirstLetter(targetAppearance);

    this.update();
    this.handleChange = this.handleChange.bind(this);
    this.addChangeEvent();
    this.addChangeStateListener(this.handleChangeState.bind(this));
  }

  addChangeEvent() {
    this.el.addEventListener('change', this.handleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this.handleChange);
  }

  handleChange(ev) {
    const { store, actions } = this.redux;
    store.dispatch(actions[`change${this._Target}`](ev.target.value));
  }

  update() {
    const appearances = this.select(this.redux.store.getState(), 'appearance');
    const nextValue = appearances[this._target];
    if (this.el.value !== nextValue) {
      if (/data\:image\//.test(nextValue)) return;
      this.el.value = nextValue;
    }
  }

  handleChangeState() {
    this.update();
  }

  _upcaseFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

}
