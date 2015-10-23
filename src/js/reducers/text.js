import * as types from '../constants/ActionTypes';
import { initialState } from '../constants';

export default function figlet(state = initialState.figlet, action) {
  switch (action.type) {

  case types.REQUEST_FIGLET:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });

  case types.RECEIVE_FIGLET:
    const { text, font, dest } = action;
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      text,
      font,
      dest
    });

  case types.INVALIDATE_FIGLET:
    return Object.assign({}, state, {
      didInvalidate: true
    });

  default:
    return state;

  }
}
