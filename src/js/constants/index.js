export const initialState = {
  figlet: {
    font: 'Standard',
    source: 'FIGleditr!!',
    dest: '',
    isFetching: false,
    didInvalidate: false
  },
  // text: 'FIGleditr!!',
  // asciiArtText: '',
  appearance: {
    color: '#323b43',
    background: '#f4f7f9',
    size: 11,
    isOpened: true
  }
};

export const MAX_FONT_SIZE = 64;
export const MIN_FONT_SIZE = 9;
