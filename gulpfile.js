'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
var assemble = require('gulp-assemble');
var htmlmin = require('gulp-htmlmin');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var awspublish = require('gulp-awspublish');
var foreach = require('gulp-foreach');
var path = require('path');
var debug = require('gulp-debug');

function formatPagePath(pagePath) {
  return pagePath
    .replace(path.resolve(process.cwd(), 'src/pages'), '')
    .replace(path.extname(pagePath), '.html');
}

gulp.task('clean', function () {
  rimraf.sync('./out');
});

var config = {
  styles: 'src/less/**/',
  stylesOut: 'out/css/',
  allStyle: '*.less',
  mainStyle: 'main.less',
  pages: './src/pages/**/*.hbs'
};

gulp.task('jshint', function () {
  gulp.src(['src/helpers/**/*.js', 'src/test/**/*.js', 'src/scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function() {
  gulp.src('./src/scripts/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./out/scripts'));
});

gulp.task('test', function () {
  gulp.src(['src/test/**/*.js'], { read: false })
    .pipe(plumber())
    .pipe(mocha());
});

gulp.task('connect', function () {
  gulp.src('./out/')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('copy', function () {
  gulp.src(['bower_components/ionicons/fonts/*'])
    .pipe(gulp.dest('out/content/fonts'));

  gulp.src(['src/content/**/*'])
    .pipe(gulp.dest('out/content'));
});

gulp.task('less', function () {
  gulp.src(config.styles + config.mainStyle)
    .pipe(plumber())
    .pipe(less({
      compress: true
    }))
    .pipe(rename('iteam.css'))
    .pipe(gulp.dest(config.stylesOut));
});

var options = {
  partials: 'src/partials/*.hbs',
  layoutdir: 'src/layouts/',
  helpers: [
    'src/helpers/**/*.js'
  ]
};

gulp.task('assemble', function () {
  gulp.src(config.pages)
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(assemble(options))
        .pipe(htmlmin({
          collapseWhitespace:true
        }))
        .pipe(concat(formatPagePath(file.path)));
    }))
    .pipe(gulp.dest('./out'));
});

gulp.task('watch', function () {
  gulp.watch(['src/layouts/**/*', config.pages, 'src/partials/**/*.hbs', 'src/**/*.md'], ['assemble']);
  gulp.watch([config.styles + config.allStyle], ['less']);
  gulp.watch('src/content/**/*', ['copy']);
  gulp.watch(['src/helpers/**/*.js','src/test/**/*.js'], ['jshint', 'test']);
  gulp.watch('./src/scripts/**/*.js', ['jshint', 'scripts']);
});

gulp.on('err', function(e) {
  console.log(e.err.stack);
});

gulp.task('default', [
  'copy',
  'jshint',
  'scripts',
  'test',
  'less',
  'assemble',
  'connect',
  'watch'
]);

gulp.task('build', [
  'clean',
  'copy',
  'jshint',
  'scripts',
  'test',
  'less',
  'assemble'
]);
