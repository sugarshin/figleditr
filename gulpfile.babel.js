import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import { reload } from 'browser-sync';

import { DIR } from './gulp/conf';

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
    ['stylus', 'copy:html', 'copy:fonts-figlet', 'browserify'],
    ['minify-css', 'uglify'],
    cb
  );
});
