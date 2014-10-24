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
 * @module routes.activities.engagement
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
 * @class Engagement
 * @constructor
 */
exports.Engagement = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * List activities for specific engagement
 *
 * @method getSpecific
 * @param engagementRef {Integer} Engagement reference
 * @param callback {String} Callback function
 * @async
 */
exports.Engagement.prototype.getSpecific = function(engagementRef, callback) {
  debug('running request');
  this.api.client.get('tasks/v2/tasks/contracts/' + engagementRef, {}, callback);
}

/**
 * Assign engagements to the list of activities
 *
 * @method assign
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param engagementRef {Integer} Engagement reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Engagement.prototype.assign = function(company, team, engagementRef, params, callback) {
  debug('running request');
  this.api.client.put('otask/v1/tasks/companies/' + company + '/teams/' + team + '/engagements/' + engagementRef + '/tasks', params, callback);
}
