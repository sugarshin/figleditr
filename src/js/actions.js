import throttle from 'lodash.throttle';

import dispatcher from './dispatcher';
import { ActionTypes, DEFAULT_STATE } from './constants';
import API from './util/api';

const {
  FETCH_DATA,
  INPUT_TEXT,
  CHANGE_FONT,
  CHANGE_COLOR,
  CHANGE_BACKGROUND,
  RESET_DATA
} = ActionTypes;

export default class Actions {

  constructor() {
    this._throttledSaveSata = throttle(this._saveData, 1000);
  }

  fetchData() {
    API.fetch().then(data => {
      dispatcher.dispatch({
        actionType: FETCH_DATA,
        data: data
      });
    });
  }

  inputText(text) {
    dispatcher.dispatch({
      actionType: INPUT_TEXT,
      text: text
    });

    this._throttledSaveSata({text: text});
  }

  changeFont(name) {
    dispatcher.dispatch({
      actionType: CHANGE_FONT,
      font: name
    });

    this._throttledSaveSata({font: name});
  }

  changeColor(colorCode) {
    dispatcher.dispatch({
      actionType: CHANGE_COLOR,
      color: colorCode
    });

    this._throttledSaveSata({color: colorCode});
  }

  changeBackground(colorCodeOrImagePath) {
    dispatcher.dispatch({
      actionType: CHANGE_BACKGROUND,
      background: colorCodeOrImagePath
    });

    this._throttledSaveSata({background: colorCodeOrImagePath});
  }

  reset() {
    dispatcher.dispatch({
      actionType: RESET_DATA,
      data: DEFAULT_STATE
    });

    this._throttledSaveSata(DEFAULT_STATE);
  }

  _saveData(data) {
    API.save(data);
  }

}
