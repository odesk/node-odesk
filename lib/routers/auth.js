/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

var entryPoint = 'api';

exports.Auth = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

exports.Auth.prototype.getUserInfo = function(callback) {
  debug('running request');
  this.api.client.get('auth/v1/info', {}, callback);
}
