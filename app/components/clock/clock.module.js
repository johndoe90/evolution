'use strict';

goog.provide('pf.Clock.module');

goog.require('pf.Clock');
goog.require('pf.Clock.clockDirective');

/**
 * Clock module
 */
pf.Clock.module = angular.module('pf.Clock.module', ['ui.router']);

pf.Clock.module.paths = {
	root: '/app/components/clock/',
	sub: '/app/components/clock/sub/',
	partials: '/app/components/clock/partials/'
};

pf.Clock.module.constant('CLOCK_SUB', pf.Clock.module.paths.sub);
pf.Clock.module.constant('CLOCK_ROOT', pf.Clock.module.paths.root);
pf.Clock.module.constant('CLOCK_PARTIALS', pf.Clock.module.paths.partials);

pf.Clock.module.configuration = function() {
	console.log('Clock configuration');
};

pf.Clock.module
	.config(pf.Clock.module.configuration)
	.service('clock', pf.Clock)
	.directive('clockDirective', pf.Clock.clockDirective.factory);

