/**
 * Contains the main clock directive
 * @author Phillip Friedrich (friedrich.phillip@gmail.com)
 */

'use strict';

goog.provide('pf.Clock.clockDirective');

goog.require('pf.Clock');

/**
 * @constructor
 * @param {!pf.Clock} clock
 * @implements {pf.interface.Observer}
 */
pf.Clock.clockDirective = function(clock) {
	/**
	 * @private
	 * @type {angular.Scope}
	 */
	this.scope_;	//jshint ignore:line

	/**
	 * @private
	 * @type(angular.JQLite)
	 */
	this.elem_;	//jshint ignore:line

	/**
	 * @private
	 * @type(angular.Attributes)
	 */
	this.attrs_;	//jshint ignore:line

	/**
	 * @private
	 * @type {!pf.Clock}
	 */
	this.subject_ = clock;

	/**
	 * @private
	 * @type {Date}
	 */
	this.time_ = new Date();	//jshint ignore:line

	//register with the clock
	this.subject_.registerObserver(this);
};

/**
 * Is called by the subject to notify the observer about a change.
 * @param {Object} data
 */
pf.Clock.clockDirective.prototype.notify = function(data) {
	this.scope_.$apply(function() {
		this.time_.setTime(data.time.getTime());
	}.bind(this));
};

/**
 * Factory which returns a new clock directive
 * @param {!pf.Clock} clock 
 * @ngInject
 */
pf.Clock.clockDirective.factory = function(clock, CLOCK_ROOT, CLOCK_PARTIALS) {
	
	/**
	 * Linking function for this directive
	 * @this {pf.Clock.clockDirective}
	 * @param  {angular.Scope} scope
	 * @param  {angular.JQLite} elem 
	 * @param  {angular.Attributes} attrs
	 */
	var link = function(scope, elem, attrs) {
		this.scope_ = scope;
		this.elem_ = elem;
		this.attrs_ = attrs;

		scope.time = this.time_;
		scope.CLOCK_ROOT = CLOCK_ROOT;

		//on destroy, remove the directive from the list of observers
		scope.$on('$destroy', function(){
			this.subject_.unregisterObserver(this);
		}.bind(this));
	};

	var dir = new pf.Clock.clockDirective(clock);

	return {
		replace: true,
		restrict: 'EA',
		link: link.bind(dir),
		templateUrl: CLOCK_PARTIALS + 'clock.directive.partial.html'
	};
};