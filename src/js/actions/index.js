import html2canvas from 'html2canvas';

import figletAsync from '../utils/figletAsync';
import * as types from '../constants/ActionTypes';

export function updateDownloadImageURL(el) {
  return (dispatch, getState) => {
    return dispatch(fetchCanvasIfNeeded(el));
  };
}

function fetchCanvasIfNeeded(el) {
  return (dispatch, getState) => {
    if (shouldFetchCanvas(getState())) {
      return dispatch(fetchCanvas(el));
    }
  };
}

function shouldFetchCanvas(state) {
  return state.figlet.isFetchingCanvas ? false : true;
}

function fetchCanvas(targetEl) {
  return dispatch => {
    dispatch(requestCanvas());
    return html2canvas(targetEl)
      .then(canvas => dispatch(receiveCanvas(canvas)));
  };
}

function requestCanvas() {
  return { type: types.REQUEST_CANVAS };
}

function receiveCanvas(canvas) {
  const downloadImageURL = canvas.toDataURL();
  return {
    type: types.RECEIVE_CANVAS,
    downloadImageURL
  }
}

export function inputText(source) {
  return (dispatch, getState) => {
    return dispatch(updateFigletIfNeeded({
      source,
      font: getState().figlet.font
    }));
  };
}

export function changeFont(font) {
  return (dispatch, getState) => {
    return dispatch(updateFigletIfNeeded({
      font,
      source: getState().figlet.source
    }));
  };
}

function updateFigletIfNeeded({ source, font }) {
  return (dispatch, getState) => {
    if (shouldUpdateFiglet(getState())) {
      return dispatch(updateFiglet({ source, font }));
    }
  };
}

function shouldUpdateFiglet(state) {
  return state.figlet.isFetching ? false : true;
}

function updateFiglet({ source, font }) {
  return dispatch => {
    dispatch(requestFiglet());
    return figletAsync(source, { font })
      .then(asciiArtText => dispatch(receiveFiglet({ source, font, dest: asciiArtText })));
  };
}

function requestFiglet() {
  return { type: types.REQUEST_FIGLET };
}

function receiveFiglet({ source, font, dest }) {
  return {
    type: types.RECEIVE_FIGLET,
    payload: { source, font, dest }
  }
}

export function changeColor(color) {
  return { type: types.CHANGE_COLOR, color };
}

export function changeBackgroundColor(backgroundColor) {
  return { type: types.CHANGE_BACKGROUND_COLOR, backgroundColor };
}

export function changeBackgroundImage(backgroundImage) {
  return { type: types.CHANGE_BACKGROUND_IMAGE, backgroundImage };
}

export function deleteBackgroundImage() {
  return { type: types.DELETE_BACKGROUND_IMAGE };
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
