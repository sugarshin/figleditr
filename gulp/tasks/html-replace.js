const gulp = require('gulp');

const htmlReplace = require('../plugins').htmlReplace;
const conf = require('../conf').htmlReplace;

gulp.task('htmlReplace', () => {
  return gulp.src(conf.src)
    .pipe(htmlReplace(conf.target))
    .pipe(gulp.dest(conf.dest));
});
