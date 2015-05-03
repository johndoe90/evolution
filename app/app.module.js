'use strict';

var app = angular.module('evolution', []);

app.controller('testController', ['$scope', function($scope) {

	console.log('instatiate controller');

	console.log('3 is a number: ' + goog.isNumber(3));

	
	$scope.click = function() {
		console.log('HUU');
	};

	$scope.name = 'Phillip';
}]);
