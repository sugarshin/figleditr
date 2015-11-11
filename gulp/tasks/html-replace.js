const gulp = require('gulp');

const htmlReplace = require('../plugins').htmlReplace;
const conf = require('../conf').htmlReplace;

gulp.task('htmlReplace', () => {
  return gulp.src(conf.src)
    .pipe(htmlReplace({
      css: 'css/main.min.css',
      js: 'js/index.min.js'
    }))
    .pipe(gulp.dest(conf.dest));
});
