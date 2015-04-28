var gulp = require('gulp');
var plumber = require('gulp-plumber');
var compiler = require('gulp-closure-compiler');

gulp.task('compile', function() {
	return gulp.src('app/app.module.js')
		.pipe(plumber())
		.pipe(compiler({
			compilerPath: 'node_modules/closure-compiler/lib/vendor/compiler.jar',
			fileName: 'build.js',
			compilerFlags: {
				compilation_level: 'ADVANCED_OPTIMIZATIONS',
				language_in: 'ECMASCRIPT5_STRICT',
				angular_pass: true,
				externs: [
					'externs/angular.js',
					'externs/angular-q.js',
					'externs/angular-http-promise.js',
					'externs/angular-mocks.js'
				], 
				generate_exports: true,
				manage_closure_dependencies: true,
				warning_level: 'VERBOSE'
			}
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('express', function() {
	var express = require('express');
	var app = express();

	app.use(require('connect-livereload')());
	app.use(express.static(__dirname));
	app.listen(4000);
});

gulp.task('livereload', function() {
	tinyLr = require('tiny-lr')();
	tinyLr.listen(35729);
});

gulp.task('watch', function(){
	gulp.watch(['app/**/*.js'], ['compile']);
});

gulp.task('default', ['compile', 'express', 'livereload', 'watch']);

gulp.task('serve', ['default']);
