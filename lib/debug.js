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
 * @module debug
 */

/**
 * @property debug
 * @type Boolean
 * @default false
 */
var debug = false;

/**
 * @class Debug
 */
function Debug(mode) {
  debug = mode;
}

/**
 * @method log
 * @param data {String} Data to display
 * @param [label=""] {String} Label
 */
Debug.prototype.log = function(data, label) {
  if (debug) {
    if (typeof data == 'string' || data instanceof String) {
      if (label) {
        console.log('> ' + label + ': ' + data);
      } else {
        console.log('> ' + data);
      }
    } else {
      console.log(' >> start dump [' + label + '] >>');
      console.log('  ' + data);
      console.log(' >> end dump [' + label + '] >>');
    }
  }
};

module.exports = Debug;