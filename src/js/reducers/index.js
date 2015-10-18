import * as types from '../constants/ActionTypes';
import { MAX_FONT_SIZE, MIN_FONT_SIZE, initialState } from '../constants';

export default function figleditr(state, action) {
  switch (action.type) {

  case types.INPUT_TEXT:
    return Object.assign({}, state, {
      text: action.text
    });

  case types.CHANGE_FONT:
    return Object.assign({}, state, {
      font: action.font
    });

  case types.CHANGE_COLOR:
    return Object.assign({}, state, {
      color: action.color
    });

  case types.CHANGE_BACKGROUND:
    return Object.assign({}, state, {
      background: action.background
    });

  case types.CHANGE_SIZE:
    return Object.assign({}, state, {
      size: action.size
    });

  case types.INCREMENT_SIZE:
    return state.size < MAX_FONT_SIZE ?
      Object.assign({}, state, {
        size: state.size + 1
      }) : state;

  case types.DECREMENT_SIZE:
    return state.size > MIN_FONT_SIZE ?
      Object.assign({}, state, {
        size: state.size - 1
      }) : state;

  case types.RESET_APPEARANCE:
    const { color, background, font, size } = initialState;
    return Object.assign({}, state, {
      color,
      background,
      font,
      size
    });

  default:
    return state;

  }
}
