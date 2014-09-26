Node.JS bindings for oDesk API
===========

# Introduction
This project provides a set of resources of oDesk API from http://developers.odesk.com
 based on OAuth 1.0a.

# Features
These are the supported API resources:

* My Info
* Custom Payments
* Hiring
* Job and Freelancer Profile
* Search Jobs and Freelancers
* Organization
* MC
* Time and Financial Reporting
* Metadata
* Snapshot
* Team
* Workd Diary
* Activities

# License

Copyright 2014 oDesk Corporation. All Rights Reserved.

php-odesk is licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## SLA
The usage of this API is ruled by the Terms of Use at:

    http://developers.odesk.com/API-Terms-of-Use

# Application Integration
To integrate this library you need to have:

* Node.JS >= 0.9
* npm >= 1.3.0

## Example
In addition to this, a full example is available in the `example` directory. 
This includes `example.js` that gets an access token and requests the data
for applications that are not web-based.
It also describes how to use your own client together with this oDesk library.

## Installation

To install the library please run the following command::

    $ npm install odesk-api

## Quick start

Before you may use oDesk APIs, you will need to obtain your pair of API keys.
Visit the `oDesk API Center documentation <https://developers.odesk.com/#authentication_oauth-10>`_
for full details.

1. - `example/example.js` to `myapp.js`
2. open `myapp.js `and type the consumerKey and consumerSecret that you previously got from the API Center.

***That's all. Run your app as `node myapp.js` and have fun.***'

## Documentation

Please use YUIDoc to build local copy of documentation or use http://odesk.github.io/node-odesk/
