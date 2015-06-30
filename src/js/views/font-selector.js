import 'whatwg-fetch';
import EasyAgent from 'easyagent';

import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

import { name } from '../../../package';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class FontSelector {

  constructor(el) {
    this.el = el;

    this._initialize = this._createOptions().then(() => {
      this.addChangeEvent();
    });

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
        this._initialize.then(() => {
          this._setFont();
        });
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
    return EasyAgent.get(`/${name}/font-names.json`)
      .fetchJson()
      .then((json) => {
        this._appendOption(json);
      })
      .catch((err) => {
        console.log(err);
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
