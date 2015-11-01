var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');

gulp.task('images', function(){
  return gulp.src('src/images/*')
  .pipe(imageResize({
    height : 1920,
    crop : false,
    upscale : false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [jpegtran()]
  }))
  .pipe(gulp.dest('dist/images/'));
});

gulp.task('scripts', function() {
  return gulp.src(['src/app.js','src/lib/*.js','src/home/home.js'])
    .pipe(gp_concat('concat.js'))
    .pipe(gulp.dest('dist'))
    .pipe(gp_rename('build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function(){
  gulp.src('./src/less/*.less')
    .pipe(watch('./src/less/*.less'))
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['styles']);
gulp.task('build', ['scripts', 'images', 'styles']);
