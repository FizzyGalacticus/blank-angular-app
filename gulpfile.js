var gulp       = require('gulp'),
	plumber    = require('gulp-plumber'),
	babelify   = require('babelify'),
	browserify = require('browserify'),
	source     = require('vinyl-source-stream'),
	concat     = require('gulp-concat'),
	uglify     = require('gulp-uglify'),
	rename     = require('gulp-rename'),
	htmlmin    = require('gulp-htmlmin'),
	imagemin   = require('gulp-imagemin'),
	cssmin     = require('gulp-cssmin');

gulp.task('script-min', function() {
	browserify('www/js/app.js')
	.transform('babelify', {
		presets: ['es2015', 'es2016', 'es2017'],
		plugins: ['angularjs-annotate']
	})
	.bundle()
	.pipe(source('app.js'))
	.pipe(plumber())
    .pipe(gulp.dest('dist/js'));

    gulp.src(['dist/js/app.js'])
    .pipe(plumber())
    .pipe(uglify())
	.pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html-min', function() {
	gulp.src('www/**/*.html')
	.pipe(plumber())
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
	.pipe(plumber())
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
	.pipe(plumber())
	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('image-min', function() {
	gulp.src('www/img/**/*')
	.pipe(plumber())
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
	gulp.watch('www/**', ['script-min', 'html-min', 'css-min', 'fonts']);
});

gulp.task('default', ['script-min', 'html-min', 'css-min', 'fonts', 'watch']);