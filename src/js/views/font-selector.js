import co from 'co';

import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

import { name } from '../../../package';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class FontSelector {

  constructor(el) {
    this.el = el;

    this._initialized = co(function* () {
      yield this._createOptions();
      this.addChangeEvent();
    }.bind(this));

    store.addChangeListener(this._handleChangeStore.bind(this));
  }

  addChangeEvent() {
    this.el.addEventListener('change', this._handleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this._handleChange);
  }

  _handleChange(ev) {
    actions.changeFont(ev.target.value);
  }

  _handleChangeStore(type) {
    switch(type) {
      case FETCH_DATA:
        co(function* () {
          yield this._initialized;
          this._setFont();
        }.bind(this));
        break;

      case RESET_DATA:
        this._setDefault();
        break;

      default:
        // noop
    }
  }

  _setFont() {
    this.el.value = store.get('font');
  }

  _setDefault() {
    this.el.value = DEFAULT_STATE.font;
  }

  _createOptions() {
    return co(function* () {
      const res = yield fetch(`/${name}/font-name.json`);
      const json = yield res.json();
      this._appendOption(json);
    }.bind(this))
    .catch(err => {
      console.log('FontSelector#_createOptions', err);
      alert('ERROR: Failed to read the font names.');
    });
  }

  _appendOption(fontNames) {
    fontNames.forEach(name => {
      let option = document.createElement('option');
      if (name === 'Standard') {
        option.setAttribute('selected', true);
      }
      option.setAttribute('value', name);
      option.textContent = name;
      this.el.appendChild(option);
    });
  }

}
