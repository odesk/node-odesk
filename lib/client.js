/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

debug('export client module');

var odesk = require('node-odesk');

exports.Client = function(config) {
  debug('starting client')
  debug(config.consumerKey, 'with consumer key');
  debug(config.consumerSecret, 'with consumer secret');

  var o = new odesk(config.consumerKey, config.consumerSecret);
  debug(o, 'got a client');

  return o;
}

odesk.prototype.setAccessToken = function(token, secret, callback) {
  debug('setting access/token pair');
  debug(token, 'token will be setup to');
  debug(secret, 'secret will be setup to');

  this.OAuth.accessToken = token;
  this.OAuth.accessTokenSecret = secret;

  return callback();
}
