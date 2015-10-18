import * as types from '../constants/ActionTypes';

export function inputText(text) {
  return { type: types.INPUT_TEXT, text };
}

export function changeFont(font) {
  return { type: types.CHANGE_FONT, font };
}

export function changeColor(color) {
  return { type: types.CHANGE_COLOR, color };
}

export function changeBackground(background) {
  return { type: types.CHANGE_BACKGROUND, background };
}

export function changeSize(size) {
  return { type: types.CHANGE_SIZE, size };
}

export function incrementSize() {
  return { type: types.INCREMENT_SIZE };
}

export function decrementSize() {
  return { type: types.DECREMENT_SIZE };
}

export function resetAppearance() {
  return { type: types.RESET_APPEARANCE };
}
