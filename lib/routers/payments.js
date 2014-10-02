/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link https://developers.odesk.com/api-tos.html}
 */

/**
 * @module routes.payments
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
 * Custom Payments
 *
 * @class Payments
 * @constructor
 */
exports.Payments = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Submit a Custom Bonus
 *
 * @method submitBonus
 * @param teamReference {Integer} Team reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Payments.prototype.submitBonus = function(teamReference, params, callback) {
  debug('running request');
  this.api.client.post('hr/v2/teams/' + teamReference + '/adjustments', params, callback);
}
