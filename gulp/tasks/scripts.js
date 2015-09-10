import gulp from 'gulp';
import gutil from 'gulp-util';
import browserify from 'browserify';
import watchify from 'watchify';
import licensify from 'licensify';
import source from 'vinyl-source-stream';

import {scripts as conf} from '../conf';

const bundler = (isWatch) => {
  let bOpts = conf.browserifyOpts;
  let b;

  if (isWatch) {
    // bOpts.debug = true
    bOpts.cache = {};
    bOpts.packageCache = {};
    bOpts.fullPath = true;
    b = watchify(browserify(bOpts));
  } else {
    b = browserify(bOpts);
  }

  b.plugin(licensify);

  const bundle = () => {
    return b.bundle()
      .on('error', error => {
        gutil.log(
          gutil.colors.bgRed.white.bold('BUNDLE ERROR'),
          error.message,
          `\n${error.codeFrame}`
        );
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest(conf.dest));
  };

  b
  .on('update', bundle)
  .on('log', message => {
    gutil.log(
      gutil.colors.green.bold('BUNDLE'),
      gutil.colors.magenta(conf.browserifyOpts.entries),
      message
    );
  });

  return bundle();
};

gulp.task('browserify', () => {
  return bundler();
});

gulp.task('watchify', () => {
  return bundler(true);
});
