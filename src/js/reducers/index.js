import { combineReducers } from 'redux';

import figlet from './figlet';
import appearance from './appearance';

export default combineReducers({
  figlet,
  appearance
});
