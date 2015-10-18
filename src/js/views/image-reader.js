import BaseView from './base-view';

export default class ImageReader extends BaseView {

  constructor(el, redux) {
    super(el, redux)

    this.handleChange = this.handleChange.bind(this);
    this.addChangeEvent();
  }

  addChangeEvent() {
    this.el.addEventListener('change', this.handleChange);
  }

  rmChangeEvent() {
    this.el.removeEventListener('change', this.handleChange);
  }

  handleChange(ev) {
    const { store, actions } = this.redux;
    (async () => {
      try {
        const imagePaths = await this._readFilesAsDataURL(ev.target.files);
        store.dispatch(actions.changeBackground(imagePaths[0]));
      } catch (err) {
        console.log('ImageReader#handleChange:\n', err);
      }
    })();
  }

  _readFilesAsDataURL(files) {
    let fileArray = [];
    for (let i = 0, l = files.length; i < l; i += 1) {
      fileArray.push(files.item(i));
    }

    fileArray = fileArray.filter(file => file.type.match('image.*'));

    return Promise.all(
      fileArray.map(file => {
        return this._readAsDataURL(file);
      })
    );
  }

  _readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();

      fr.onload = ev => resolve(ev.target.result);

      fr.onerror = err => reject(err);

      fr.readAsDataURL(file);
    });
  }

}
