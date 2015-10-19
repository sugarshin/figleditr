import BaseView from './base-view';
import { name } from '../../../package';

export default class FontSelector extends BaseView {

  constructor(el, redux) {
    super(el, redux);

    this.handleChange = this.handleChange.bind(this);

    (async () => {
      try {
        this._initialized = await this._createOptions();
        this.update();
        this.addChangeEvent();
      } catch (err) {
        console.log('FontSelector#constructor:\n', err);
      }
    })();

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
    store.dispatch(actions.changeFont(ev.target.value));
  }

  update() {
    const appearances = this.select(this.redux.store.getState(), 'appearance');
    const nextValue = appearances['font'];
    if (this.el.value !== nextValue) {
      this.el.value = nextValue;
    }
  }

  handleChangeState() {
    this.update();
  }

  _createOptions() {
    return this._fetchFontNames()
      .then(fontNames => this._appendOptions(fontNames))
      .catch(err => console.log('FontSelector#_createOptions:\n', err));
  }

  _fetchFontNames() {
    return fetch(`/${name}/font-names.json`)
      .then(res => res.json())
      .catch(err => console.log('FontSelector#_fetchFontNames:\n', err));
  }

  _appendOptions(fontNames) {
    fontNames.forEach(fontName => {
      const option = document.createElement('option');
      if (fontName === 'Standard') {
        option.setAttribute('selected', true);
      }
      option.setAttribute('value', fontName);
      option.textContent = fontName;
      this.el.appendChild(option);
    });
  }

}
