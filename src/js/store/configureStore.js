import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import debounce from 'redux-localstorage-debounce';
import filter from 'redux-localstorage-filter';

import rootReducer from '../reducers';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, require('redux-logger')()];
}

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const filterKeys = [
  'figlet.font', 'figlet.source', 'figlet.dest', 'figlet.downloadImageURL',
  'appearance'
];
const storage = compose(
  debounce(1000),
  filter(filterKeys)
)(adapter(global.localStorage));

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  persistState(storage, 'figleditr')
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
