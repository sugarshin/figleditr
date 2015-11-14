const gulp = require('gulp');
const nib = require('nib');

const plugins = require('../plugins');
const conf = require('../conf').stylus;

gulp.task('stylus-nib', () => {
  return gulp.src(conf.src)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError('<%= error.message %>')
    }))
    .pipe(plugins.stylus(Object.assign({
      use: nib(),
      import: 'nib'
    }, conf.opts)))
    .pipe(plugins.rename({
      dirname: './'
    }))
    .pipe(gulp.dest(conf.dest, {
      cwd: './'
    }));
});
