import keyMirror from 'fbjs/lib/keyMirror';

export default {
  ActionTypes: keyMirror({
    FETCH_DATA: null,
    INPUT_TEXT: null,
    CHANGE_FONT: null,
    CHANGE_COLOR: null,
    CHANGE_BACKGROUND: null,
    RESET_DATA: null
  }),
  DEFAULT_STATE: {
    color: '#323b43',
    background: '#f4f7f9',
    font: 'Standard'
  }
};
