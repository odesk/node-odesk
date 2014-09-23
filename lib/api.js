/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

debug = function(data, label) {
    var d = new Debug(true);
    d.log(data, label);
}

var Debug  = require('./debug')
  , Config = require('./config')
  , Client = require('./client').Client;

var dataFormat = 'json';

exports.oDeskApi = function(options) {
  debug('oDeskApi');
  this.cfg = new Config(options);
  this.client = new Client(this.cfg);
}

exports.oDeskApi.prototype.getAuthorizationUrl = function(callbackUrl, callback) {
  debug('getting authorization url via oDeskApi');
  this.client.OAuth.getAuthorizeUrl(callbackUrl, callback);
}

exports.oDeskApi.prototype.getAccessToken = function(requestToken, requestTokenSecret, verifier, callback) {
  debug('getting access token via oDeskApi');
  this.client.OAuth.getAccessToken(requestToken, requestTokenSecret, verifier, callback);
}

exports.oDeskApi.prototype.setAccessToken = function(token, secret, callback) {
  debug('set access token');
  this.client.setAccessToken(token, secret, callback);
}
