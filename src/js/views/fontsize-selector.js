import BaseView from './base-view';
import { MAX_FONT_SIZE, MIN_FONT_SIZE } from '../constants';
import { name } from '../../../package';

export default class FontSizeSelector extends BaseView {

  constructor(el, redux) {
    super(el, redux);

    this._createOptions();

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
    const val = parseInt(ev.target.value, 10);
    store.dispatch(actions.changeSize(val));
  }

  update() {
    const nextValue = this.select(this.redux.store.getState(), 'size');
    if (this.el.value !== nextValue) {
      this.el.value = nextValue;
    }
  }

  handleChangeState() {
    this.update();
  }

  _createOptions() {
    Array.from({length: MAX_FONT_SIZE + 1}, (v, i) => {
      if (i >= MIN_FONT_SIZE) return i;
    })
    .filter(v => v)
    .forEach(size => {
      const option = document.createElement('option');
      option.setAttribute('value', size);
      option.textContent = `${size}px`;
      this.el.appendChild(option);
    });
  }

}
