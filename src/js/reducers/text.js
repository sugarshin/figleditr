import * as types from '../constants/ActionTypes';
import { initialState } from '../constants';

export default function text(state = initialState.text, action) {
  switch (action.type) {

  case types.INPUT_TEXT:
    return action.text;

  default:
    return state;

  }
}
