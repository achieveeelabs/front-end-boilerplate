// Required Packges
// npm install gulp (use this if you have already install gulp globally)
// else use the following cammand

// npm install --global gulp
var gulp  = require('gulp'),
// npm install gulp-util
var gutil = require('gulp-util');
// npm install gulp-concat
var concat = require('gulp-concat');
// npm install gulp-minify-css
var minifyCSS = require('gulp-minify-css');
// npm install gulp-uglify
var uglify = require('gulp-uglify');
// npm i gulp-image-optimization
var imageop = require('gulp-image-optimization');

// Set task
gulp.task('production', function() {

	gulp.src(['assets/css/bootstrap.min.css'])
	.pipe(minifyCSS())
	.pipe(concat('webapp.min.css'))
	.pipe(gulp.dest('css/'))

	gulp.src(['assets/js/bootstrap.min.js'])
	.pipe(uglify())
	.pipe(concat('webapp.min.js'))
	.pipe(gulp.dest('js/'));

});


// For CSS
gulp.task('build-css', function() {
	gulp.src(['assets/css/bootstrap.min.css'])
	.pipe(minifyCSS())
	.pipe(concat('webapp.min.css'))
	.pipe(gulp.dest('css/'));
});


// For js
gulp.task('build-js', function() {
	gulp.src(['js/html5.js','js/bootstrap.min.js','js/bootstrap.offcanvas.js','js/swiper.min.js','js/theme-script.js','js/skip-link-focus-fix.js'])
	.pipe(uglify())
	.pipe(concat('webapp.min.js'))
	.pipe(gulp.dest('js/'));
});

gulp.task('watch', function() {
	gulp.watch('js/*.js', ['build-js']);
	gulp.watch('css/*.css', ['build-css']);
});


// For Images
gulp.task('img', function() {
	gulp.src(['assets/img/*.png','assets/img/*.jpg','assets/img/*.gif','assets/img/*.jpeg','assets/img/*/*.png','assets/img/*/*.jpg','assets/img/*/*.gif','assets/img/*/*.jpeg']).pipe(imageop({
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	})).pipe(gulp.dest('assets/dist/img')).on('end', cb).on('error', cb);
});