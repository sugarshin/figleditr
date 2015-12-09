import figlet from 'figlet';

/**
 * figletAsync
 *
 * @param {String} text
 * @param {Object} { font, horizontalLayout, verticalLayout }
 * @returns {Promise}
 */
export default function figletAsync(text, { font, horizontalLayout, verticalLayout }) {
  return new Promise((resolve, reject) => {
    figlet(text, { font, horizontalLayout, verticalLayout }, (err, data) => {
      if (err) { reject(err); }
      resolve(data);
    });
  });
}
