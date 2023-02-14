'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*eslint-env browser, amd, commonjs*/
/*global module*/

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
  window.thread = _index2.default;
}

if (typeof define === 'function') {
  define([], function () {
    return _index2.default;
  });
} else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
  module.exports = _index2.default;
}
//# sourceMappingURL=bundle.browser.js.map
