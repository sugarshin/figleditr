import gulp from 'gulp';

import { copy as conf } from '../conf';

gulp.task('copy:html', () => {
  return gulp.src(conf.html.src)
    .pipe(gulp.dest(conf.html.dest));
});

gulp.task('copy:fonts-figlet', () => {
  return gulp.src(conf.figlet.src)
    .pipe(gulp.dest(conf.figlet.dest));
});
