import co from 'co';
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
  CHANGE_SIZE,
  RESET_DATA
} = ActionTypes;

export default class Actions {

  constructor() {
    this._throttledSaveData = throttle(this.__saveData, 1000);
  }

  fetchData() {
    co(function* () {
      try {
        const data = yield API.fetch();
        dispatcher.dispatch({
          actionType: FETCH_DATA,
          data: data
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  inputText(text) {
    dispatcher.dispatch({
      actionType: INPUT_TEXT,
      text: text
    });

    this._throttledSaveData({text: text});
  }

  changeFont(name) {
    dispatcher.dispatch({
      actionType: CHANGE_FONT,
      font: name
    });

    this._throttledSaveData({font: name});
  }

  changeColor(colorCode) {
    dispatcher.dispatch({
      actionType: CHANGE_COLOR,
      color: colorCode
    });

    this._throttledSaveData({color: colorCode});
  }

  changeBackground(colorCodeOrImagePath) {
    dispatcher.dispatch({
      actionType: CHANGE_BACKGROUND,
      background: colorCodeOrImagePath
    });

    this._throttledSaveData({background: colorCodeOrImagePath});
  }

  changeSize(size) {
    dispatcher.dispatch({
      actionType: CHANGE_SIZE,
      size
    });

    this._throttledSaveData({size});
  }

  reset() {
    dispatcher.dispatch({
      actionType: RESET_DATA,
      data: DEFAULT_STATE
    });

    this._throttledSaveData(DEFAULT_STATE);
  }

  __saveData(data) {
    API.save(data);
  }

}
