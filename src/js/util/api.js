import Promise from 'bluebird';

import { DEFAULT_STATE } from '../constants';

const NAME = 'figleditr';

export default class API {

  static fetch() {
    return new Promise((resolve, reject) => {
      try {
        resolve( JSON.parse(localStorage.getItem(NAME) || '{}') );
      } catch (err) {
        reject(err);
      }
    });
  }

  static save(data) {
    return new Promise((resolve, reject) => {
      try {
        const current = localStorage.getItem(NAME) || '{}';
        const newData = Object.assign({}, JSON.parse(current), data);
        localStorage.setItem(NAME, JSON.stringify(newData));
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

}
