/**
 * Created by zs on 2017/5/25.
 */
var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var open = require('open')
var postcss = require('gulp-postcss')
var px2rem = require('postcss-px2rem')

var app = {
  srcPath: 'src/',
  devPath: 'build/',
  prdPath: 'dist/'
}

gulp.task('lib',function () {
  gulp.src('bower_components/**/*.js')
    .pipe(gulp.dest(app.devPath + 'vendor'))
    .pipe(gulp.dest(app.prdPath + 'vendor'))
    .pipe($.connect.reload())
})

gulp.task('html',function () {
  gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath))
    .pipe($.connect.reload())
})

gulp.task('json',function () {
  gulp.src(app.srcPath + 'data/**/*.json')
    .pipe(gulp.dest(app.devPath + 'data'))
    .pipe(gulp.dest(app.prdPath + 'data'))
    .pipe($.connect.reload())
})

gulp.task('less',function () {
  return gulp.src(app.srcPath + 'style/**/*.less')
    .pipe($.less())
    .pipe(gulp.dest(app.srcPath + 'style'))
    .pipe($.connect.reload())
})

gulp.task('px2rem',['less'], function() {
  var processors = [px2rem({remUnit: 37.5})];
  return gulp.src(app.srcPath + 'style/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest(app.devPath + 'css'))
    .pipe($.cssmin())
    .pipe(gulp.dest(app.prdPath + 'css'))
    .pipe($.connect.reload())
});

gulp.task('js',function () {
  gulp.src(app.srcPath + 'script/**/*.js')
    .pipe($.concat('index.js'))
    .pipe(gulp.dest(app.devPath + 'js'))
    .pipe($.uglify())
    .pipe(gulp.dest(app.prdPath + 'js'))
    .pipe($.connect.reload())
})

gulp.task('image',function () {
  gulp.src(app.srcPath + 'image/**/*')
    .pipe(gulp.dest(app.devPath + 'image'))
    .pipe($.imagemin())
    .pipe(gulp.dest(app.prdPath + 'image'))
    .pipe($.connect.reload())
})

gulp.task('build',['image','js','json','html','lib','px2rem'])

gulp.task('clean',function () {
  gulp.src([app.devPath,app.prdPath,app.srcPath + '/style/*.css'])
    .pipe($.clean())
})

gulp.task('server',['build'],function () {
  $.connect.server({
    root: [app.devPath],
    livereload: true,
    port: 1234
  })
  open("http://localhost:1234")
  gulp.watch(app.srcPath + 'script/**/*.js',['js'])
  gulp.watch(app.srcPath + '**/*.html',['html'])
  gulp.watch(app.srcPath + 'data/**/*.json',['json'])
  gulp.watch(app.srcPath + 'style/**/*.less',['less'])
  gulp.watch(app.srcPath + 'image/**/*',['image'])
  gulp.watch(app.srcPath + 'style/*',['px2rem'])
  gulp.watch('bower_components/**/*.js',['lib'])
})

gulp.task('default',['server'])