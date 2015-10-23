import * as types from '../constants/ActionTypes';
import { MAX_FONT_SIZE, MIN_FONT_SIZE, initialState } from '../constants';

export default function appearance(state = initialState.appearance, action) {
  switch (action.type) {

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
    const { color, background, font, size } = initialState.appearance;
    return Object.assign({}, state, {
      color,
      background,
      font,
      size
    });

  case types.CLOSE_APPEARANCE_PANEL:
    return state.isOpened ?
      Object.assign({}, state, { isOpened: false }) : state;

  case types.OPEN_APPEARANCE_PANEL:
    return state.isOpened ?
      state : Object.assign({}, state, { isOpened: true });

  case types.TOGGLE_APPEARANCE_PANEL:
    return Object.assign({}, state, { isOpened: !state.isOpened });

  default:
    return state;

  }
}
