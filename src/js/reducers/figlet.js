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
    const { source, font, dest } = action.payload;
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      source,
      font,
      dest
    });

  case types.INVALIDATE_FIGLET:
    return Object.assign({}, state, {
      didInvalidate: true
    });

  case types.REQUEST_CANVAS:
    return Object.assign({}, state, {
      isFetchingCanvas: true,
      didInvalidateCanvas: false
    });

  case types.RECEIVE_CANVAS:
    const { downloadImageURL } = action;
    return Object.assign({}, state, {
      isFetchingCanvas: false,
      didInvalidateCanvas: false,
      downloadImageURL
    });

  case types.INVALIDATE_CANVAS:
    return Object.assign({}, state, {
      didInvalidateCanvas: true
    });

  default:
    return state;

  }
}
