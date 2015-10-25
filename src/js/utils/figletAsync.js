import figlet from 'figlet';

export default function figletAsync(text, { font, horizontalLayout, verticalLayout }) {
  return new Promise((resolve, reject) => {
    figlet(text, { font, horizontalLayout, verticalLayout }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
