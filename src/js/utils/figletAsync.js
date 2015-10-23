import figlet from 'figlet';

export default function figletAsync(text, { font }) {
  return new Promise((resolve, reject) => {
    figlet(text, { font }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
