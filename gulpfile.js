	// npm install gulp -g (use this if you want install gulp globally).

	// npm install gulp
var gulp  = require('gulp'),
	// npm install gulp-util
	gutil = require('gulp-util');
	// npm install gulp-concat
var concat = require('gulp-concat');
	// npm install gulp-minify-css
var minifyCSS = require('gulp-minify-css');
	// npm install gulp-uglify
var uglify = require('gulp-uglify');
//  npm install gulp-sass
var sass = require('gulp-sass');
// npm i gulp-image-optimization
// var imageop = require('gulp-image-optimization');

gulp.task('build-css', function() {
	gulp.src(['css/bootstrap.min.css','css/font-awesome.css','css/style.css'])
	.pipe(minifyCSS())
	.pipe(concat('webapp.min.css'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('build-js', function() {
	gulp.src(['js/jquery-3.2.1.min.js','js/popper.min.js','js/bootstrap.min.js'])
	.pipe(uglify())
	.pipe(concat('webapp.min.js'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
	gulp.src('sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('css/'))
});

gulp.task('watch',function() {
	gulp.watch('sass/**/*.scss', function() {
		gulp.run(['sass','build-css','build-js']);
	});
});

gulp.task('img', function() {
	gulp.src(['assets/img/*.png','assets/img/*.jpg','assets/img/*.gif','assets/img/*.jpeg','assets/img/*/*.png','assets/img/*/*.jpg','assets/img/*/*.gif','assets/img/*/*.jpeg']).pipe(imageop({
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	})).pipe(gulp.dest('assets/dist/img')).on('end', cb).on('error', cb);
});