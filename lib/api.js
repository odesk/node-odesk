/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

/**
 * @module api
 * @requires debug, config, client
 */

debug = function(data, label) {
    var d = new Debug(true);
    d.log(data, label);
}

var Debug  = require('./debug')
  , Config = require('./config')
  , Client = require('./client').Client;

/**
 * @property dataFormat
 * @type String
 * @default json
 * @final
 */
var dataFormat = 'json';

/**
 * @class oDeskApi
 * @constructor
 */
exports.oDeskApi = function(options) {
  debug('oDeskApi');
  this.cfg = new Config(options);
  this.client = new Client(this.cfg);
}

/**
 * @method Get authorization URL
 * @param callbackUrl {String} Callback URL
 * @param callback
 * @async
 */
exports.oDeskApi.prototype.getAuthorizationUrl = function(callbackUrl, callback) {
  debug('getting authorization url via oDeskApi');
  this.client.OAuth.getAuthorizeUrl(callbackUrl, callback);
}

/**
 * @method Get access token
 * @param requestToken {String} Request token
 * @param requestTokenSecret {String} Request token secret
 * @param verifier {String} Verifier got on authorization step
 * @param callback
 * @async
 */
exports.oDeskApi.prototype.getAccessToken = function(requestToken, requestTokenSecret, verifier, callback) {
  debug('getting access token via oDeskApi');
  this.client.OAuth.getAccessToken(requestToken, requestTokenSecret, verifier, callback);
}

/**
 * @method Get access token
 * @param token {String} Access token
 * @param secret {String} Access token secret
 * @param callback
 * @async
 */
exports.oDeskApi.prototype.setAccessToken = function(token, secret, callback) {
  debug('set access token');
  this.client.setAccessToken(token, secret, callback);
}
