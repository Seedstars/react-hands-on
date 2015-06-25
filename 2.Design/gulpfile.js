'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var bower = require('gulp-bower');

var bowerConfig = {
    bowerDir: 'src/bower_components'
};

gulp.task('bower', function () {
    return bower(bowerConfig.bowerDir)
        .pipe(gulp.dest(bowerConfig.bowerDir))
});

gulp.task('browserify', function() {
    gulp.src('src/js/app.jsx')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('pics', function () {
    return gulp.src(['src/pics/**/*'])
        .pipe(gulp.dest('www/pics'));
});

gulp.task('css', function() {
    return gulp.src(['src/css/*css'])
        .pipe(gulp.dest('www/css/'));
});

gulp.task('ratchet', function () {
    return gulp.src(['src/bower_components/ratchet/dist/**/'])
        .pipe(gulp.dest('www/ratchet'));
});

gulp.task('html', function () {
    return gulp.src(['src/*html'])
        .pipe(gulp.dest('www/'));
});

gulp.task('default',['browserify', 'ratchet', 'pics', 'css', 'html']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});

