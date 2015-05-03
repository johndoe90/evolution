'use strict';

goog.provide('pf.Test');

goog.require('pf.interface.Observer');

/**
 * @constructor
 * @implements {Observer}
 */
function Test() { }

/**
 * Notify me
 * @override
 * @param  {Object} data
 */
Test.prototype.notify = function(data) {
	console.log('I was notified');
};