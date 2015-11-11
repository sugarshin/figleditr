const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const reload = require('browser-sync').reload;

const DIR = require('./gulp/conf').DIR;

requireDir('./gulp/tasks');

gulp.task('predefault', cb => {
  runSequence(
    [
      'stylus',
      'copy:html',
      'copy:fonts-figlet',
      'watchify'
    ],
    'serve',
    cb
  );
});

gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`./${DIR.SRC}/**/*.styl`],
    ['stylus', reload]
  );
  gulp.watch(
    [`./${DIR.DEST}/**/*.js`],
    reload
  );
});

gulp.task('build', cb => {
  runSequence(
    'clean',
    ['htmlReplace', 'stylus', 'copy:fonts-figlet', 'browserify'],
    ['minify-css', 'uglify'],
    cb
  );
});
