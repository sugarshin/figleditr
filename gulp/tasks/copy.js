import gulp from 'gulp';

import {copy as conf} from '../conf';

gulp.task('copy:fonts-figlet', () => {
  return gulp.src(conf.figlet.src)
    .pipe(gulp.dest(conf.figlet.dest));
});

gulp.task('copy:octicons', () => {
  return gulp.src(conf.octicons.src)
    .pipe(gulp.dest(conf.octicons.dest));
});

gulp.task('copy:font-name.json', () => {
  return gulp.src(conf.fontName.src)
    .pipe(gulp.dest(conf.fontName.dest));
});
