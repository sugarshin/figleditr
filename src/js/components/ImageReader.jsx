import React, { PropTypes } from 'react';

export default function ImageReader({ actions }) {
  return <input type="file" accept="image/*" onChange={ev => handleChange(ev, actions)} />;
}

ImageReader.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleChange(ev, { changeBackgroundImage }) {
  (async () => {
    try {
      const imagePaths = await readFilesAsDataURL(ev.target.files);
      console.log(imagePaths[0]);
      changeBackgroundImage(imagePaths[0]);
    } catch (err) {
      console.log('ImageReader#handleChange:\n', err);
    }
  })();
}

function readFilesAsDataURL(files) {
  let fileArray = [];
  for (let i = 0, l = files.length; i < l; i += 1) {
    fileArray = [...fileArray, files.item(i)];
  }

  fileArray = fileArray.filter(file => file.type.match('image.*'));

  return Promise.all(
    fileArray.map(file => readAsDataURL(file))
  );
}

function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();

    fr.onload = ev => resolve(ev.target.result);

    fr.onerror = err => reject(err);

    fr.readAsDataURL(file);
  });
}
