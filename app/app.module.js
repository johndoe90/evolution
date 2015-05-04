'use strict';


angular.module('evolution', [
	'ui.router'
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


/*var app = angular.module('evolution', []);

app.controller('testController', ['$scope', function($scope) {

	console.log('instatiate controller');

	console.log('3 is a number: ' + goog.isNumber(3));

	
	$scope.click = function() {
		console.log('HUU');
	};

	$scope.name = 'Phillip';
}]);*/