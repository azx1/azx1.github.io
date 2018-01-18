var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-minify-css');
var autoprefixer =  require('gulp-autoprefixer');
var less = require('gulp-less');

gulp.task('script',function(){
	 return gulp.src(['./js/jquery.js','./js/bootstrap.js','./js/anchor.js','./js/jquery.tagcloud.js','./js/fastclick.js'])
	 .pipe(concat('all.js'))
	 .pipe(gulp.dest('./dist/js/'))
	 .pipe(uglify())
	 .pipe(rename({suffix:'.min'}))
	 .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css',function(){
	return gulp.src(['./css/bootstrap.css','./css/customize.css','./css/font-awesome.css','./css/syntax.css','./css/animate.css'])
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist/css/'))
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./dist/css/'));

});

gulp.task('less',function(){
    return  gulp.src('./less/customize.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css/'))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./css/'))

});
