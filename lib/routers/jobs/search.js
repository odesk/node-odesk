/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/24/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

/**
 * @module routes.jobs.search
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
 * @class Search
 * @constructor
 */
exports.Search = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Search Jobs
 *
 * @method find
 * @param params {Hash} Parameters, i.e. search criteria
 * @param callback {String} Callback function
 * @async
 */
exports.Search.prototype.find = function(params, callback) {
  debug('running request');
  this.api.client.get('profiles/v2/search/jobs', params, callback);
}
