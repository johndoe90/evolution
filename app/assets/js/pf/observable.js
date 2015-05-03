'use strict';

goog.provide('pf.interface.Observable');

goog.require('pf.interface.Observer');

/**
 * This object can be observed by an Observer.
 * @interface
 */
function Observable() {}

/**
 * Register an observer in order to get notified from the subject
 * @param  {!Observer} observer 
 */
Observable.prototype.registerObserver = function(observer) {};

/**
 * Unregister an observer in order to stop notifications from the subject
 * @param  {!Observer} observer
 */
Observable.prototype.unregisterObserver = function(observer) {};