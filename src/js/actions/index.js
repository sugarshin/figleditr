import html2canvas from 'html2canvas';

import figletAsync from '../utils/figletAsync';
import * as types from '../constants/ActionTypes';

export function updateDownloadImageURL(el) {
  return dispatch => dispatch(fetchCanvasIfNeeded(el));
}

function fetchCanvasIfNeeded(el) {
  return (dispatch, getState) => {
    if (shouldFetchCanvas(getState())) {
      return dispatch(fetchCanvas(el));
    }
  };
}

function shouldFetchCanvas(state) {
  return !state.figlet.isFetchingCanvas;
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
  };
}

export function inputText(source) {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch(updateFigletIfNeeded({
      source,
      font: state.figlet.font,
      horizontalLayout: state.figlet.horizontalLayout,
      verticalLayout: state.figlet.verticalLayout
    }));
  };
}

export function changeFont(font) {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch(updateFigletIfNeeded({
      font,
      source: state.figlet.source,
      horizontalLayout: state.figlet.horizontalLayout,
      verticalLayout: state.figlet.verticalLayout
    }));
  };
}

export function changeHorizontalLayout(horizontalLayout) {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch(updateFigletIfNeeded({
      horizontalLayout,
      verticalLayout: state.figlet.verticalLayout,
      font: state.figlet.font,
      source: state.figlet.source
    }));
  };
}

export function changeVerticalLayout(verticalLayout) {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch(updateFigletIfNeeded({
      verticalLayout,
      horizontalLayout: state.figlet.horizontalLayout,
      font: state.figlet.font,
      source: state.figlet.source
    }));
  };
}

function updateFigletIfNeeded({ source, font, horizontalLayout, verticalLayout }) {
  return (dispatch, getState) => {
    if (shouldUpdateFiglet(getState())) {
      return dispatch(updateFiglet({ source, font, horizontalLayout, verticalLayout }));
    }
  };
}

function shouldUpdateFiglet(state) {
  return !state.figlet.isFetching;
}

function updateFiglet({ source, font, horizontalLayout, verticalLayout }) {
  return dispatch => {
    dispatch(requestFiglet());
    return figletAsync(source, { font, horizontalLayout, verticalLayout })
      .then(asciiArtText => dispatch(receiveFiglet({
        source,
        font,
        dest: asciiArtText,
        horizontalLayout,
        verticalLayout
      })));
  };
}

function requestFiglet() {
  return { type: types.REQUEST_FIGLET };
}

function receiveFiglet({ source, font, dest, horizontalLayout, verticalLayout }) {
  return {
    type: types.RECEIVE_FIGLET,
    payload: { source, font, dest, horizontalLayout, verticalLayout }
  };
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

export function toggleAppearancePanel() {
  return { type: types.TOGGLE_APPEARANCE_PANEL };
}
