'use strict';

goog.require('evolution.states.module');

angular.module('evolution', [
	'ui.router',
	'evolution.states.module'
])
.config(config);

/**
 * Configuration
 * @param {ui.router.$urlRouterProvider} $urlRouterProvider
 * @ngInject
 */
function config($urlRouterProvider) {
	console.log('CONFIG');
	console.log('otherwise' in $urlRouterProvider);
}