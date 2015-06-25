'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/js/app.jsx')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('html', function () {
    return gulp.src(['src/*html'])
        .pipe(gulp.dest('www/'));
});

gulp.task('default',['browserify', 'html']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});

