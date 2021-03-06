let gulp         = require('gulp'),
	plumber      = require('gulp-plumber'),
	browserify   = require('browserify'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	source       = require('vinyl-source-stream'),
	concat       = require('gulp-concat'),
	minify       = require('gulp-babel-minify'),
	rename       = require('gulp-rename'),
	htmlmin      = require('gulp-htmlmin'),
	imagemin     = require('gulp-imagemin'),
	cssmin       = require('gulp-cssmin'),
	sequence     = require('gulp-sequence');

gulp.task('compile-scripts', function() {
	return browserify('www/js/app.js')
	.transform('babelify', {
		presets: ['env'],
		plugins: ['angularjs-annotate']
	})
	.bundle()
	.pipe(source('app.js'))
	.pipe(plumber())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('min-scripts', function() {
	return gulp.src(['dist/js/app.js'])
	.pipe(plumber())
	.pipe(minify())
	.pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('min-html', function() {
	return gulp.src('www/**/*.html')
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

gulp.task('sass', function () {
	return gulp.src(['www/sass/**/*.scss', 'www/sass/**/*.css', 'www/css/**/*.css'])
	.pipe(plumber())
	.pipe(sass())
	.pipe(sass.sync())
	.pipe(autoprefixer({
		browsers: ['last 3 versions']
	}))
	.pipe(concat('app.css'))
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
	let fontDir = 'www/fonts/';
	return gulp.src([fontDir + '*.ttf',
			  fontDir + '*.oft', 
			  fontDir + '*.woff', 
			  fontDir + '*.woff2', 
			  fontDir + '*.svg', 
			  fontDir + '*.eot'])
	.pipe(plumber())
	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('min-image', function() {
	return gulp.src('www/img/**/*')
	.pipe(plumber())
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});

gulp.task('prod', function() {
	process.env.NODE_ENV = 'production';
});

gulp.task('all', function(callback) {
	sequence('prod', 'compile-scripts', 'min-scripts', ['min-html', 'sass', 'fonts'])(callback);
});

gulp.task('watch', function() {
	gulp.watch('www/**', ['all']);
});

gulp.task('default', sequence('all', 'watch'));