export const initialState = {
  figlet: {
    font: 'Standard',
    source: 'FIGleditr!!',
    dest: `  _____ ___ ____ _          _ _ _        _ _
 |  ___|_ _/ ___| | ___  __| (_) |_ _ __| | |
 | |_   | | |  _| |/ _ \\/ _\` | | __| '__| | |
 |  _|  | | |_| | |  __/ (_| | | |_| |  |_|_|
 |_|   |___\\____|_|\\___|\\__,_|_|\\__|_|  (_|_)
                                             `,
    downloadImageURL: 'data:image/png;base64,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y9y6sSUAY8QQdOOvra2VLvn5bW7fcyMnr+axun5Ox5Vo7m6sZbzGdHqt4pUH8yKAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQDHqDT0AAAIFSURBVGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggQIHkACJDIIAAAggggAACCCCAQGoIUCClxjqSBQIIIIAAAggggAACCDggkHG0vnGzA+MwBAIIIIAAAggggAACCCCQ9AL/D5IrN1pjWZG6AAAAAElFTkSuQmCC',
    isFetching: false,
    didInvalidate: false,
    isFetchingCanvas: false,
    didInvalidateCanvas: false,
  },
  appearance: {
    color: '#323b43',
    backgroundColor: '#f4f7f9',
    backgroundImage: 'none',
    size: 11,
    isOpened: true
  }
};

export const MAX_FONT_SIZE = 64;
export const MIN_FONT_SIZE = 9;
