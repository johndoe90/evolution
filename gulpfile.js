var gulp = require('gulp');
var plumber = require('gulp-plumber');
var compiler = require('gulp-closure-compiler');

gulp.task('compile', function() {
	return gulp.src('src/**/*.js')
		.pipe(plumber())
		.pipe(compiler({
			compilerPath: 'node_modules/closure-compiler/lib/vendor/compiler.jar',
			fileName: 'build.js'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch(['src/**/*.js'], ['compile']);
});

gulp.task('default', ['compile', 'watch']);
