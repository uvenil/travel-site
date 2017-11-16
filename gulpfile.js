var gulp = require ('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', () => console.log("Gulp läuft"));

gulp.task('html', () => console.log("html läuft"));

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp'));
});


gulp.task('watch', () => {
  watch( './app/index.html', () => gulp.start('default') );
  watch( './app/assets/styles/**/*.css', () => gulp.start('styles') );
});
