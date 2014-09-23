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
 * @module routes.teams
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
 * @class Teams
 * @constructor
 */
exports.Teams = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Teamrooms
 *
 * @method getList
 * @param callback {String} Callback function
 * @async
 */
exports.Teams.prototype.getList = function(callback) {
  debug('running request');
  this.api.client.get('team/v2/teamrooms', {}, callback);
}

/**
 * Get specific team or company
 *
 * @method getSpecific
 * @param team {String} Teamroom or company ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Teams.prototype.getSpecific = function(callback) {
  debug('running request');
  this.api.client.get('team/v2/teamrooms/' + team, params, callback);
}
