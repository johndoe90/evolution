'use strict';

goog.provide('pf.Clock');

/**
 * Clock component
 * @constructor
 * @implements {pf.interface.Observable}
 */
pf.Clock = function() {
	/**
	 * @private
	 * @type {!Date}
	 */
	this.time_ = new Date();

	/**
	 * @private
	 * @type {Array<!pf.interface.Observer>}
	 */
	this.observers_ = [];

	/**
	 * This is how much faster the time goes.
	 * If the multiplier is 1 then 1 tick is 1 second
	 * If the multiplier is 10 then 1 tick is 10 seconds
	 * @private
	 * @type {number}
	 */
	this.multiplier_ = 10000;

	/**
	 * This is the rate at which the observers get updated 
	 * ( t[s] = 1000ms / updateRate )
	 * @private
	 * @type {number}
	 */
	this.updateRate_ = 1;

	/**
	 * @private
	 * @type {number|null}
	 */
	this.interval_ = null;

	this.start();
};

pf.Clock.prototype.tick = function() {
	var oldTime = this.time_.getTime();
	var diff = this.multiplier_ / this.updateRate_ * 1000;

	this.time_.setTime(oldTime + diff);

	this.updateObservers(this.time_, diff);
};

/**
 * @param {number} multiplier 
 */
pf.Clock.prototype.setMultiplier = function(multiplier) {
	this.multiplier_ = multiplier;
};

/**
 * @param {number} updateRate
 */
pf.Clock.prototype.setUpdateRate = function(updateRate) {
	this.updateRate_ = updateRate;

	if ( this.interval_ !== null ) {
		this.stop();
		this.start();
	}
};



pf.Clock.prototype.start = function() {
	var updatesPerSecond = 1000 / this.updateRate_;

	var fn = pf.Clock.prototype.tick.bind(this);

	if ( this.interval_ !== null ) {
		this.stop();
	}

	this.interval_ = setInterval(fn, updatesPerSecond);
};

pf.Clock.prototype.stop = function() {
	if ( this.interval_ !== null ) {
		clearInterval(this.interval_);
		this.interval_ = null;
	}	
};

/**
 * Public getter for the current date.
 * @return {!Date} 
 */
pf.Clock.prototype.getTime = function() {
	return this.time_;
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
	console.log('unregister observer');
	var index = this.observers_.indexOf(observer);

	if ( index !== -1 )
		this.observers_.splice(index, 1);
};

/**
 * Update the observers.
 * @param  {Date} time The current time.
 * @param  {number} diff The time elapsed since last update;
 */
pf.Clock.prototype.updateObservers = function(time, diff) {
	/**
	 * @param  {!pf.interface.Observer}	observer
	 */
	var fn = function(observer) {
		observer.notify({
			time: time,
			diff: diff
		});
	};

	this.observers_.forEach(fn.bind(this));
};