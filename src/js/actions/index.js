import figletAsync from '../utils/figletAsync';
import * as types from '../constants/ActionTypes';

export function inputText(text) {
  return (dispatch, getState) => {
    return updateFigletIfNeeded({ font: getState().figlet.font, text });
  };
}

export function changeFont(font) {
  return (dispatch, getState) => {
    return updateFigletIfNeeded({ text: getState().figlet.source, font });
  };
}

function updateFigletIfNeeded({ text, font }) {
  return (dispatch, getState) => {
    if (shouldUpdateFiglet(getState())) {
      return dispatch(updateFiglet(text, font));
    }
  };
}

function shouldUpdateFiglet(state) {
  return state.figlet.isFetching ? false : true;
}

function updateFiglet(text, font) {
  return dispatch => {
    dispatch(requestFiglet());
    return figletAsync(text, { font })
      .then(asciiArtText => dispatch(receiveFiglet({ text, font, dest: asciiArtText })));
  };
}

function requestFiglet() {
  return { type: REQUEST_FIGLET };
}

function receiveFiglet({ text, font, dest }) {
  return {
    type: types.RECEIVE_FIGLET,
    text,
    font,
    dest
  }
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

export function closeAppearancePanel() {
  return { type: types.CLOSE_APPEARANCE_PANEL };
}

export function openAppearancePanel() {
  return { type: types.OPEN_APPEARANCE_PANEL };
}

export function toggleAppearancePanel() {
  return { type: types.TOGGLE_APPEARANCE_PANEL };
}
