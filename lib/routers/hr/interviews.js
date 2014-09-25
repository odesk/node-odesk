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
 * @module routes.hr.interviews
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
 * @class Interviews
 * @constructor
 */
exports.Interviews = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Invite to interview
 *
 * @method invite
 * @param jobKey {String} Job key
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Interviews.prototype.invite = function(jobKey, params, callback) {
  debug('running request');
  this.api.client.post('hr/v1/jobs/' + jobKey + '/candidates', params, callback);
}
