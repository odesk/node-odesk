/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

/**
 * @module routes.snapshot
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
 * Snapshot Info
 *
 * @class Snapshot
 * @constructor
 */
exports.Snapshot = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get snaphot info
 *
 * @method get
 * @param company {String} Company
 * @param username {String} Username
 * @param ts {String} Timestamp
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.get = function(company, username, ts, callback) {
  debug('running request');
  this.api.client.get('team/v1/snapshots/' + company + '/' + username + '/' + ts, {}, callback);
}

/**
 * Update snapshot
 *
 * @method update
 * @param company {String} Company
 * @param username {String} Username
 * @param ts {String} Timestamp
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.update = function(company, username, ts, params, callback) {
  debug('running request');
  this.api.client.put('team/v1/snapshots/' + company + '/' + username + '/' + ts, params, callback);
}

/**
 * Delete snaphot
 *
 * @method delete
 * @param company {String} Company
 * @param username {String} Username
 * @param ts {String} Timestamp
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.delete = function(company, username, ts, callback) {
  debug('running request');
  this.api.client.delete('team/v1/snapshots/' + company + '/' + username + '/' + ts, {}, callback);
}
