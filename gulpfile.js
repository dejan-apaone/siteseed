'use strict';

//npm install --save-dev gulp
//npm install --save-dev  gulp-sass gulp-cssnano gulp-sourcemaps gulp-autoprefixer gulp-concat-css gulp-notify gulp-concat gulp-rename gulp-uglify

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var notify = require("gulp-notify");

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


var cssFiles = ([
    // 'vendor/bootstrap/css/bootstrap.min.css',
    // 'vendor/font-awesome-4.7.0/css/font-awesome.min.css',
    // 'vendor/bootstrap-select-master/dist/css/bootstrap-select.min.css',
    // 'vendor/animate.css',
    // 'vendor/slick/slick.css',
    // 'vendor/Magnific-Popup/magnific-popup.css',

]);
var cssDest = 'css/';
gulp.task('vendor_style', function () {
    return gulp.src(cssFiles)
        .pipe(concatCss("vendor.css", {inlineImports: false, rebaseUrls: false}))
        .pipe(cssnano())
        .pipe(gulp.dest(cssDest))
});




gulp.task('sass_style', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie 9'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('css'))

});

var jsFiles = ([
    // 'vendor/bootstrap/js/bootstrap.min.js',
    // 'vendor/bootstrap/bootstrap-select/bootstrap-select.min.js',
    // 'vendor/bootstrap-select-master/dist/js/bootstrap-select.min.js',
    // 'vendor/jquery.matchHeight-min.js',
    // 'vendor/wow.js',
    // 'vendor/slick/slick.min.js',
    // 'vendor/Magnific-Popup/jquery.magnific-popup.min.js',
    // 'vendor/validate/jquery.validate.min.js',
    // 'vendor/validate/localization/messages_sr_lat.js'


]);
var jsDest = 'js';

gulp.task('vendor_scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass_style']);

});
gulp.task('default', ['watch', 'sass_style','vendor_scripts', 'vendor_style']);
