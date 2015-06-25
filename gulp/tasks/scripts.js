import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
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

  const bundle = () => {
    return b.bundle()
      .on('error', err => {
        console.log(`bundle error: ${err}`);
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest(conf.dest));
  };

  b
  .on('update', bundle)
  .on('log', message => {
    console.log(message);
  });

  return bundle();
};

gulp.task('browserify', () => {
  return bundler();
});

gulp.task('watchify', () => {
  return bundler(true);
});
