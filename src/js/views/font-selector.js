import EasyAgent from 'easyagent';

import { actions, store } from '../flux';
import { ActionTypes, DEFAULT_STATE } from '../constants';

const { FETCH_DATA, RESET_DATA } = ActionTypes;

export default class FontSelector {

  constructor(el) {
    this.el = el;

    this._initialize = this._createOptions().then(() => {
      this.addChangeEvent();
    });

    store.addChangeListener(this._handleStoreChange.bind(this));
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

  _handleStoreChange(type) {
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
    return EasyAgent.get('/font-name.json')
      // .setHeaders({'Accept': 'text/plain'})
      .fetchJson()
      .then((json) => {
        this._appendOption(json.fontNames);
      })
      .catch((err) => {
        console.dir(err);
        alert('ERROR: Failed to read the font.');
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
