import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

import { name } from '../../../package';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class FontSelector {

  constructor(el) {
    this.el = el;

    (async () => {
      try {
        this._initialized = await this._createOptions();
        this.addChangeEvent();
      } catch (err) {
        console.log('FontSelector#constructor:\n', err);
      }
    })();

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
        (async () => {
          try {
            await this._initialized;
            this._setFont();
          } catch (err) {
            console.log('FontSelector#_handleChangeStore:\n', err);
          }
        })();
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
    return this._fetchFontNames()
      .then(fontNames => this._appendOption(fontNames))
      .catch(err => console.log('FontSelector#_createOptions', err));
  }

  _fetchFontNames() {
    return fetch(`/${name}/font-names.json`)
      .then(res => res.json())
      .catch(err => console.log('FontSelector#_fetchFontNames', err));
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
