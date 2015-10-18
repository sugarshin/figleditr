export default class BaseView {

  constructor(el, redux) {
    this.el = el;
    this.redux = redux;
  }

  addChangeStateListener(listener) {
    this.unsubscribe = this.redux.store.subscribe(listener);
  }

  rmChangeStateListener() {
    if (!this.unsubscribe) return;
    this.unsubscribe();
  }

  select(state, key) {
    return state[key];
  }
}
