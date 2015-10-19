import { combineReducers } from 'redux';

import text from './text';
import appearance from './appearance';

export default combineReducers({
  text,
  appearance
});
