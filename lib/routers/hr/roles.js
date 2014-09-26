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
 * @module routes.hr.roles
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
 * @class Roles
 * @constructor
 */
exports.Roles = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get user roles
 *
 * @method getAll
 * @param callback {String} Callback function
 * @async
 */
exports.Roles.prototype.getAll = function(callback) {
  debug('running request');
  this.api.client.get('hr/v2/userroles', {}, callback);
}

/**
 * Get by specific user
 *
 * @method getBySpecificUser
 * @param reference {Integer} User reference
 * @param callback {String} Callback function
 * @async
 */
exports.Roles.prototype.getBySpecificUser = function(reference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/userroles/' + reference, {}, callback);
}
