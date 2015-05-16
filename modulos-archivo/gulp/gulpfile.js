
var gulp = require('gulp'),
	plugins= require('gulp-load-plugins');

gulp.task('styles', function () {
    return gulp.src('stylus/*.styl')
    .pipe(plugins.stylus({compress: false}))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', function (cb) {
   console.log("default");
});