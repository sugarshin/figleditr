import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import debounce from 'redux-localstorage-debounce';
import reject from 'redux-localstorage-reject';

import rootReducer from '../reducers';
import { rejectKeys } from '../constants/initialState';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, require('redux-logger')()];
}

const finalReducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
  debounce(1000),
  reject(rejectKeys)
)(adapter(global.localStorage));

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  persistState(storage, 'figleditr')
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(finalReducer, initialState);
}
