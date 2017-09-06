var gulp = require('gulp');
var sass = require('gulp-sass');
var utils = require('gulp-util');

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
    return gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./stylesheets'))
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['watch'], function () {
    return utils.log('Gulp is running!');
});