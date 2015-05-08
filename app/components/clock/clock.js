'use strict';

goog.provide('pf.Clock');

/**
 * Clock component
 * @constructor
 * @implements {pf.interface.Observable}
 */
pf.Clock = function() {

	console.log('new service');

	/**
	 * @private
	 * @type {Array<!pf.interface.Observer>}
	 */
	this.observers_ = [];
};

/**
 * @param  {!pf.interface.Observer} observer 
 */
pf.Clock.prototype.registerObserver = function(observer) {
	if ( this.observers_.indexOf(observer) === -1 )
		this.observers_.push(observer);
};

/**
 * @param  {!pf.interface.Observer} observer 
 */
pf.Clock.prototype.unregisterObserver = function(observer) {
	var index = this.observers_.indexOf(observer);

	if ( index !== -1 )
		this.observers_.splice(index, 1);
};