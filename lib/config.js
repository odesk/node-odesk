/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

function Config(options) {
  this.consumerKey = options.consumerKey;
  this.consumerSecret = options.consumerSecret;
  this.accessToken = options.accessToken;
  this.accessSecret = options.accessSecret;
  this.signatureMethod = options.signatureMethod || 'HMAC-SHA1';
  this.debug = options.debug || false;
}

module.exports = Config;
