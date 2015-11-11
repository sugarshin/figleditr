const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const watchify = require('watchify');
const licensify = require('licensify');
const source = require('vinyl-source-stream');

const conf = require('../conf').scripts;

const bundler = (isWatch) => {
  const bOpts = conf.browserifyOpts;
  var b;

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
          error.message
        );
      })
      .pipe(source('index.js'))
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
