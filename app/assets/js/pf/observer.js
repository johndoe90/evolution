'use strict';

goog.provide('pf.interface.Observer');

/**
 * The Observer can register with an Observable (subject) and can get updates 
 * from it.
 * @interface
 */
function Observer() {}

/**
 * Is called by the subject to notify the observer about a change.
 * @param {Object} data
 */
Observer.prototype.notify = function(data) {};