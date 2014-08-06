var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('./package.json').buildConfig;

gulp.task('default', function () {
  gulp.start('watch');
});

gulp.task('lint', function () {
  var jsLintConfig = config.jslint;

  return gulp.src(config.jslint.files)
    .pipe(jshint())
    .pipe(jshint.reporter(config.jslint.reporter));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  var scriptsPath = "app/**/*.js";
  gulp.watch(scriptsPath, ['lint']);
});