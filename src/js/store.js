import EventEmitter from 'eventemitter3';
// import assign from 'object-assign';

import dispatcher from './dispatcher';
import { ActionTypes, DEFAULT_STATE, INITIAL_TEXT } from './constants';

const {
  FETCH_DATA,
  INPUT_TEXT,
  CHANGE_FONT,
  CHANGE_COLOR,
  CHANGE_BACKGROUND,
  CHANGE_SIZE,
  RESET_DATA
} = ActionTypes;
const CHANGE_EVENT = 'change';

export default class Store extends EventEmitter {

  constructor() {
    super();

    this._state = Object.assign({}, DEFAULT_STATE, {text: INITIAL_TEXT});

    dispatcher.register(this._handler.bind(this));
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.off(CHANGE_EVENT, callback);
  }

  get(name) {
    return this._state[name];
  }

  getAll() {
    return this._state;
  }

  _fetchData(data) {
    this._state = data;
  }

  _update(updates) {
    this._state = Object.assign({}, this._state, updates);
  }

  _emitChange(...type) {
    this.emit(CHANGE_EVENT, ...type);
  }

  _handler(action) {
    switch (action.actionType) {

      case FETCH_DATA:
        this._update(action.data);
        this._emitChange(FETCH_DATA);
        break;

      case RESET_DATA:
        this._update(action.data);
        this._emitChange(RESET_DATA);
        break;

      case INPUT_TEXT:
        this._update({text: action.text});
        this._emitChange(INPUT_TEXT);
        break;

      case CHANGE_FONT:
        this._update({font: action.font});
        this._emitChange(CHANGE_FONT);
        break;

      case CHANGE_COLOR:
        this._update({color: action.color});
        this._emitChange(CHANGE_COLOR);
        break;

      case CHANGE_BACKGROUND:
        this._update({background: action.background});
        this._emitChange(CHANGE_BACKGROUND);
        break;

      case CHANGE_SIZE:
        this._update({size: action.size});
        this._emitChange(CHANGE_SIZE);
        break;

      default:
        // noop

    }
  }

}
