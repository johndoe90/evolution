'use strict';

goog.provide('pf.Clock.module');

goog.require('pf.Clock');
goog.require('pf.Clock.clockDirective');

/**
 * Clock module
 */
pf.Clock.module = angular.module('pf.Clock.module', ['ui.router']);

pf.Clock.module.configuration = function() {
	console.log('Clock configuration');
};

pf.Clock.module
	.config(pf.Clock.module.configuration)
	.service('clock', pf.Clock)
	.directive('clockDirective', pf.Clock.clockDirective.factory);

