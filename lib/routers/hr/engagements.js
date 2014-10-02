/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/24/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link https://developers.odesk.com/api-tos.html}
 */

/**
 * @module routes.hr.engagements
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Engagements
 * @constructor
 */
exports.Engagements = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get list of engagements
 *
 * @method getList
 * @param callback {String} Callback function
 * @async
 */
exports.Engagements.prototype.getList = function(callback) {
  debug('running request');
  this.api.client.get('hr/v2/engagements', {}, callback);
}

/**
 * Get specific engagement
 *
 * @method getSpecific
 * @param reference {Integer} Engagement reference
 * @param callback {String} Callback function
 * @async
 */
exports.Engagements.prototype.getSpecific = function(reference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/engagements/' + reference, {}, callback);
}
