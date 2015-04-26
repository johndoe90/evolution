'use strict';

var app = angular.module('evolution', []);

app.controller('testController', function($scope) {
	console.log('instatiate controller');

	$scope.click = function() {
		console.log('HUU');
	}

	$scope.name = 'Phillip';
});
