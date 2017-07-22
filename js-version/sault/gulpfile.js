var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var targetPath = './'

gulp.task('html', function() {
  gulp.src(targetPath + '**/*.html').pipe($.connect.reload());
});

gulp.task('css', function() {
  gulp.src(targetPath + 'style/**/*.css').pipe($.connect.reload());
});

gulp.task('js', function() {
  gulp.src(targetPath + 'script/**/*.js').pipe($.connect.reload());
});

gulp.task('build', ['html', 'css', 'js']);

gulp.task('server', ['build'], function() {
  $.connect.server({
    root: [targetPath],
    livereload: true,
    port: 8080
  });
  open('http://localhost:8080');
  gulp.watch(targetPath + '**/*.html', ['html']);
  gulp.watch(targetPath + 'style/**/*.css', ['css']);
  gulp.watch(targetPath + 'script/**/*.js', ['js']);
});

gulp.task('default', ['server']);