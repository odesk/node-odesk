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
 * @module client
 * @requires node-odesk
 */

debug('export client module');

var odesk = require('node-odesk');

/**
 * @class Client
 * @constructor
 */
exports.Client = function(config) {
  debug('starting client')
  debug(config.consumerKey, 'with consumer key');
  debug(config.consumerSecret, 'with consumer secret');

  var o = new odesk(config.consumerKey, config.consumerSecret);
  debug(o, 'got a client');

  return o;
}

/**
 * @method Set access token
 * @param token {String} Access token
 * @param secret {String} Access token secret
 * @param callback {String} Callback
 * @async
 */
odesk.prototype.setAccessToken = function(token, secret, callback) {
  debug('setting access/token pair');
  debug(token, 'token will be setup to');
  debug(secret, 'secret will be setup to');

  this.OAuth.accessToken = token;
  this.OAuth.accessTokenSecret = secret;

  return callback();
}
