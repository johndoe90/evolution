'use strict';

goog.provide('evolution.states.module');

goog.require('evolution.states.firstController');

/**
 * Module for all states of the evolution app
 * 
 */
evolution.states.module = angular.module('evolution.states.module', ['ui.router']);

/**
 * Configuration function for this module
 * @param  {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
evolution.states.module.configuration = function($stateProvider) {
	$stateProvider.state('first', {
		url: '/first',
		templateUrl: 'app/states/evolution/first.html',
		controller: 'FirstController as firstCtrl'
	});
};

evolution.states.module
	.config(evolution.states.module.configuration)
	.controller('FirstController', evolution.states.firstController);