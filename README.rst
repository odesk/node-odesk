===========
oDesk-API
===========

Node.JS bindings for oDesk API

Installation
============

To install node-odesk please run the following command::

    $ npm install odesk-api

Usage
=====

Quick start
-----------

Before you may use oDesk APIs, you will need to obtain your pair of API keys.
Visit the `oDesk API Center documentation <https://developers.odesk.com/#authentication_oauth-10>`_
for full details. Please note, that Node-oDesk uses authorization via OAuth and it needs keys with auth type "OAuth".

Initializing the client::

    config = {
        'consumerKey' : 'your_application_key',
        'consumerSecret' : 'key_secret'
    }

    var odesk = require('odesk-api');
    var api = new odesk(config);

Shows the authorization url::

    api.getAuthorizeUrl(function(error, url, requestToken, requestTokenSecret) {
        console.log(url, requestToken, requestTokenSecret);
    });

Also you may specify your custom callback url for authorize url::

    api.getAuthorizeUrl('http://example.com/complete', function(error, url, requestToken, requestTokenSecret) {
        console.log(url, requestToken, requestTokenSecret);
    });

Getting accessToken::

    api.getAccessToken(requestToken, requestTokenSecret, verifier, function(error, accessToken, accessTokenSecret) {
        console.log(accessToken, accessTokenSecret);
    });

Set accessToken::

    api.setAccessToken(accessToken, accessTokenSecret, function() {
        console.log(accessToken, accessTokenSecret);
    });

Get user info from oDesk API::

    Auth = require('../lib/routers/auth').Auth

    var auth = new Auth(api);
    auth.getUserInfo(function(error, data) {
        console.log(error || data);
    });
