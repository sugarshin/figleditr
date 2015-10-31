import gulp from 'gulp';

import { htmlReplace } from '../plugins';
import { htmlReplace as conf } from '../conf';

gulp.task('htmlReplace', () => {
  return gulp.src(conf.src)
    .pipe(htmlReplace({
      css: 'css/main.min.css',
      js: 'js/index.min.js'
    }))
    .pipe(gulp.dest(conf.dest));
});
