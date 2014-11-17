/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       11/17/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link https://developers.odesk.com/api-tos.html}
 */

/**
 * @module routes.hr.submissions
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Interviews
 * @constructor
 */
exports.Submissions = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Freelancer submits work for the client to approve
 *
 * @method requestApproval
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Submissions.prototype.requestApproval = function(params, callback) {
  debug('running request');
  this.api.client.post('hr/v3/fp/submissions', params, callback);
}

/**
 * Approve an existing Submission
 *
 * @method approve
 * @param submissionId {Integer} Submission ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Submissions.prototype.approve = function(submissionId, params, callback) {
  debug('running request');
  this.api.client.put('hr/v3/fp/submissions/' + submissionId + '/approve', params, callback);
}

/**
 * Reject an existing Submission
 *
 * @method reject
 * @param submissionId {Integer} Submission ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Submissions.prototype.reject = function(submissionId, params, callback) {
  debug('running request');
  this.api.client.put('hr/v3/fp/submissions/' + submissionId + '/reject', params, callback);
}
