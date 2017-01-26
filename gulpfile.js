var gulp     = require('gulp'),
	concat   = require('gulp-concat'),
	uglify   = require('gulp-uglify'),
	rename   = require('gulp-rename'),
	csslint  = require('gulp-csslint'),
	jshint   = require('gulp-jshint'),
	htmllint = require('gulp-htmllint'),
	htmlmin  = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	cssmin   = require('gulp-cssmin');

gulp.task('script-min', function() {
	gulp.src('www/js/**/*.js')
	// .pipe(jshint())
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html-min', function() {
	gulp.src('www/**/*.html')
	// .pipe(htmllint())
	.pipe(htmlmin({
		collapseWhitespace: true,
		minifyURLs: true,
		minifyCSS: true,
		minifyJS: true,
		removeAttributeQuotes: true,
		removeComments: true,
		removeEmptyAttributes: true,
		removeOptionalTags: true,
		removeRedundantAttributes: true
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('css-min', function() {
	gulp.src('www/css/**/*.css')
	// .pipe(csslint())
	.pipe(concat('app.css'))
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
	var fontDir = 'www/fonts/';
	gulp.src([fontDir + '*.ttf',
			  fontDir + '*.oft', 
			  fontDir + '*.woff', 
			  fontDir + '*.woff2', 
			  fontDir + '*.svg', 
			  fontDir + '*.eot'])
	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('image-min', function() {
	gulp.src('www/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
	gulp.watch('www/**', ['script-min', 'html-min', 'css-min', 'fonts']);
});

gulp.task('default', ['script-min', 'html-min', 'css-min', 'fonts', 'watch']);