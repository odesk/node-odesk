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
 * @module routes.hr.clients.offers
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
 * @class Offers
 * @constructor
 */
exports.Offers = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get list of offers
 *
 * @method getList
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Offers.prototype.getList = function(params, callback) {
  debug('running request');
  this.api.client.get('offers/v1/clients/offers', params, callback);
}

/**
 * Get specific offer
 *
 * @method getSpecific
 * @param params {Hash} Parameters
 * @param reference {Integer} Offer reference
 * @param callback {String} Callback function
 * @async
 */
exports.Offers.prototype.getSpecific = function(reference, params, callback) {
  debug('running request');
  this.api.client.get('offers/v1/clients/offers/' + reference, params, callback);
}

/**
 * Send client offer
 *
 * @method makeOffer
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Offers.prototype.makeOffer = function(params, callback) {
  debug('running request');
  this.api.client.post('offers/v1/clients/offers', params, callback);
}
