'use strict';

goog.require('pf.Clock.module');
goog.require('evolution.states.module');

angular.module('evolution', [
	'ui.router',
	evolution.states.module.name,
	pf.Clock.module.name
])
.config(config);

/**
 * Configuration
 * @param {ui.router.$urlRouterProvider} $urlRouterProvider
 * @ngInject
 */
function config($urlRouterProvider) {
	console.log('DONE');
}