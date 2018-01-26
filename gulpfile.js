var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-minify-css');
var autoprefixer =  require('gulp-autoprefixer');
var less = require('gulp-less');
var replace = require('gulp-replace');

gulp.task('script-concat',function(){
	 return gulp.src(['./src/js/{jquery,bootstrap,jquery.lazyload,jquery.tagcloud,fastclick,anchor,customize}.js','./src/js/*.js'])
	 .pipe(concat('all.js'))
	 .pipe(gulp.dest('./dist/js/'))
	 .pipe(uglify())
	 .pipe(rename({suffix:'.min'}))
	 .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css-concat',function(){
	return gulp.src(['./src/css/{bootstrap,customize,font-awesome,syntax,animate}.css','./src/css/*.css'])
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist/css/'))
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./dist/css/'));

});

gulp.task('less',function(){
    return  gulp.src('./src/less/customize.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css/'))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./src/css/min/'))

});

gulp.task('watch',function(){
	gulp.watch('./src/less/customize.less',['less']);
	gulp.watch('./src/css/*.css',['css-concat']);
	gulp.watch('./src/js/*.js',['script-concat']);
});

gulp.task('replace',function(){
	 return gulp.src('./_posts/*.{md,markdown}')
	 .pipe(replace(/data-lazy-src(?=.*\.(jpg|jpeg|png))/g,'data-original'))
	 .pipe(gulp.dest('./_posts/'));
});
