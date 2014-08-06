var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
  gulp.start('watch');
});

gulp.task('lint', function () {
  var location = ['./gulpfile.js', './app/**/*.js'];

  return gulp.src(location)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  var scriptsPath = "app/**/*.js";
  gulp.watch(scriptsPath, ['lint']);
});