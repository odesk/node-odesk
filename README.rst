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

    var odesk = require('odesk-api');
    var o = new config(key, secret);

Shows the authorization url::

    o.OAuth.getAuthorizeUrl(function(error, url, requestToken, requestTokenSecret) {
        console.log(url, requestToken, requestTokenSecret);
    });

Also you may specify your custom callback url for authorize url::

    o.OAuth.getAuthorizeUrl('http://example.com/complete', function(error, url, requestToken, requestTokenSecret) {
        console.log(url, requestToken, requestTokenSecret);
    });

Getting accessToken::

    o.OAuth.getAccessToken(requestToken, requestTokenSecret, verifier, function(error, accessToken, accessTokenSecret) {
        console.log(accessToken, accessTokenSecret);
    });

Set accessToken::

    o.OAuth.accessToken = accessToken;
    o.OAuth.accessTokenSecret = accessTokenSecret;

Get user info from oDesk API::

    o.get('auth/v1/info', function(error, data) {
        console.log(error || data);
    });

Also you can use POST, PUT or DELETE methods::

    o.put('team/v1/snapshots/<company>/<username>/<timestamp>', {memo: "Testing..."}, function(error, data) {
        console.log(error || data);
    });
