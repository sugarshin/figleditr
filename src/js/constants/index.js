export const initialState = {
  figlet: {
    font: 'Standard',
    source: 'FIGleditr!!',
    dest: '',
    downloadImageURL: '',
    isFetching: false,
    didInvalidate: false,
    isFetchingCanvas: false
  },
  appearance: {
    color: '#323b43',
    background: '#f4f7f9',
    size: 11,
    isOpened: true
  }
};

export const MAX_FONT_SIZE = 64;
export const MIN_FONT_SIZE = 9;
