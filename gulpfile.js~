var gulp = require('gulp');
var glob = require('glob-all');
var tinyLr = require('tiny-lr');
var express = require('express');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var stylish = require('jshint-stylish');
var connectLr = require('connect-livereload');


gulp.task('express', function() {
	var app = express();

	app.use(connectLr());
	app.use(express.static(__dirname));
	app.listen(4000);

	var lr = tinyLr();
	lr.listen(35729);
});

gulp.task('closure-depswriter', function() {
	gulp.src('')
		.pipe(plumber())
		.pipe(shell([
			'./closure/closure-library/closure/bin/build/depswriter.py ' + 
			'--root_with_prefix="app ../../../../../app" ' + 
			'--output_file app/deps.js',

			'./bin/generateDepsAutoLoad'
		]));
});

gulp.task('closure-compiler', function() {
	var sources = glob.sync([
		'app/**/*.js',
		'!app/deps.js',
		'!app/**/*.spec.js'
	]).join(' ');

	gulp.src('')
		.pipe(plumber())
		.pipe(shell([
			'java -jar closure/closure-compiler/build/compiler.jar ' +
			'--compilation_level ADVANCED_OPTIMIZATIONS ' +
			'--language_in ECMASCRIPT5_STRICT ' +
			'--angular_pass ' +
			'--externs closure/closure-compiler/contrib/externs/angular-1.3.js ' +
			'--externs closure/closure-compiler/contrib/externs/angular-1.3-q.js ' +
			'--externs closure/closure-compiler/contrib/externs/angular-1.3-http-promise.js ' +
			'--externs closure/closure-compiler/contrib/externs/angular-1.3-mocks.js ' +
			'--externs closure/closure-compiler/contrib/externs/angular_ui_router.js ' + 
			'--generate_exports ' +
			'--manage_closure_dependencies ' +
			'--warning_level VERBOSE ' +
			'--js closure/closure-library/closure/goog/base.js ' +
			'--js <%= sources %> ' +
			'--js_output_file dist/build.js'
		], {
			errorMessage: 'Closure Compiler Error: \n <%= error %>',
			templateData: {
				sources: sources
			}
	}));
});

gulp.task('inject', function() {
	var target = gulp.src('index.html');
	var sources = gulp.src([
		'closure/closure-library/closure/goog/base.js',
		'node_modules/angular/angular.js',
		'node_modules/angular-ui-router/release/angular-ui-router.js',
		'app/deps.js',
		'app/autoLoadDeps.js',
		'app/app.module.js'
	], {read: false});

	return target.pipe(inject(sources))
		.pipe(gulp.dest('./'));
});

gulp.task('jshint', function() {
	return gulp.src('app/**/*.js')
		.pipe(jshint({
			devel: true,
			globals: {
				'angular': false,
				'goog': false,
				'evolution': true
			},
			globalstrict: true
		}))
		.pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
	gulp.watch(['app/**/*.js', '!app/deps.js'], ['jshint', 'closure-depswriter', 'closure-compiler']);
});


gulp.task('serve', ['closure-depswriter', 'inject', 'express', 'watch']);

gulp.task('build', ['closure-compiler']);

gulp.task('default', ['serve']);
