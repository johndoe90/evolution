'use strict';

goog.provide('pf.interface.Observable');

goog.require('pf.interface.Observer');

/**
 * This object can be observed by an Observer.
 * @interface
 */
pf.interface.Observable = function() {};

/**
 * Register an observer in order to get notified from the subject
 * @param  {!pf.interface.Observer} observer 
 */
pf.interface.Observable.prototype.registerObserver = function(observer) {};

/**
 * Unregister an observer in order to stop notifications from the subject
 * @param  {!pf.interface.Observer} observer
 */
pf.interface.Observable.prototype.unregisterObserver = function(observer) {};