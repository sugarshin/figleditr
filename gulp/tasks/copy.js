import gulp from 'gulp';

import { copy as conf } from '../conf';

gulp.task('copy:fonts-figlet', () => {
  return gulp.src(conf.figlet.src)
    .pipe(gulp.dest(conf.figlet.dest));
});

gulp.task('copy:json', () => {
  return gulp.src(conf.json.src)
    .pipe(gulp.dest(conf.json.dest));
});

gulp.task('copy:zeroclipboard', () => {
  return gulp.src(conf.zeroclipboard.src)
    .pipe(gulp.dest(conf.zeroclipboard.dest));
});
