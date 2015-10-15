import Promise from 'bluebird';

import { actions } from '../flux';

export default class ImageReader {

  constructor(el) {
    this.el = el;

    this._boundHandleChange = this._handleChange.bind(this);
    this.addChangeEvent();
  }

  addChangeEvent() {
    this.el.addEventListener('change', this._boundHandleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this._boundHandleChange);
  }

  _handleChange(ev) {
    (async () => {
      try {
        const imagePaths = await this._readFilesAsDataURL(ev.target.files);
        actions.changeBackground(imagePaths[0]);
      } catch (err) {
        console.log('ImageReader#_handleChange', err);
      }
    })();
  }

  _readFilesAsDataURL(files) {
    let fileArray = [];
    for (let i = 0, l = files.length; i < l; i+=1) {
      fileArray.push(files.item(i));
    }

    return Promise.all(
      fileArray.map(file => {
        if (!file.type.match('image.*')) return false;
        return this.__readAsDataURL(file);
      }).filter(promise => promise)
    );
  }

  __readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();

      fr.onload = ev => {
        resolve(ev.target.result);
      };

      fr.onerror = err => {
        reject(err);
      };

      fr.readAsDataURL(file);
    });
  }

}
