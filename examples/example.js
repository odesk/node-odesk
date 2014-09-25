/**
 * Example of usage oDeskAPI
 *
 * @package     oDeskAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link http://developers.odesk.com/API-Terms-of-Use}
 */

var config = {
  'consumerKey' : 'xxxxxxxx',
  'consumerSecret' : 'xxxxxxxx',
//  'accessToken' : 'xxxxxxxx', // assign if known
//  'accessSecret' : 'xxxxxxxx', // assign if known
  'debug' : false
};

var oDeskApi = require('../')
  , Auth = require('../lib/routers/auth').Auth
  , rl = require('readline');

// you can use your own client for OAuth routine, just identify it here
// and use as a second parameter for oDeskApi constructor (see the example of usage below)
// note: your client must support 3 main methods:
// 1. getAuthorizationUrl - gets request token/secret pair, creates and returns
//    authorization url, based on received data
// 2. getAccessToken(requestToken, requestTokenSecret, verifier, callback) - 
//    requests access token/secret pair using known request token/secret pair and verifier
// 3. setAccessToken(token, secret, callback) - sets known access token/secret pair
//
// var MyClient = require('../lib/myclient').MyClient;

// a function to get access token/secret pair
function getAccessTokenSecretPair(api, callback) {
  // get authorization url
  api.getAuthorizationUrl('http://localhost/complete', function(error, url, requestToken, requestTokenSecret) {
    if (error) throw new Error('can not get authorization url, error: ' + error);
    debug(requestToken, 'got a request token');
    debug(requestTokenSecret, 'got a request token secret');

    // authorize application
    var i = rl.createInterface(process.stdin, process.stdout);
    i.question('Please, visit an url ' + url + ' and enter a verifier: ', function(verifier) {
      i.close();
      process.stdin.destroy();
      debug(verifier, 'entered verifier is');

      // get access token/secret pair
      api.getAccessToken(requestToken, requestTokenSecret, verifier, function(error, accessToken, accessTokenSecret) {
        if (error) throw new Error(error);

        debug(accessToken, 'got an access token');
        debug(accessTokenSecret, 'got an access token secret');

        callback(accessToken, accessTokenSecret);
      });
    });
  });
};

// get my data
function getUserData(api, callback) {
  // make a call
  var auth = new Auth(api);
  auth.getUserInfo(function(error, data) {
    callback(error, data);
  });
}

(function main() {
  // uncomment only if you want to use your own client
  // var client = new MyClient(config);
  // var api = new oDeskApi(null, client);

  // use a predefined client for OAuth routine
  var api = new oDeskApi(config);

  if (!config.accessToken || !config.accessSecret) {
    // run authorization in case we haven't done it yet
    // and do not have an access token-secret pair
    getAccessTokenSecretPair(api, function(accessToken, accessTokenSecret) {
      debug(accessToken, 'current token is');
      // store access token data in safe place!

      // get my auth data
      getUserData(api, function(error, data) {
        debug(data, 'response');
        console.log('Hello: ' + data.auth_user.first_name);
      });
    });
  } else {
    api.setAccessToken(config.accessToken, config.accessSecret, function() {
      // get my auth data
      getUserData(api, function(error, data) {
        debug(data, 'response');
        // server_time
        console.log('Hello: ' + data.auth_user.first_name);
      });
    });
  }
})();
