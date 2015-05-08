'use strict';

goog.provide('pf.interface.Observer');

/**
 * The Observer can register with an Observable (subject) and can get updates 
 * from it.
 * @interface
 */
pf.interface.Observer = function() {};

/**
 * Is called by the subject to notify the observer about a change.
 * @param {Object} data
 */
pf.interface.Observer.prototype.notify = function(data) {};