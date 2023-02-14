"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * HTMLTreeBuilder
 */
var TreeBuilder = /*#__PURE__*/function () {
  function TreeBuilder() {
    _classCallCheck(this, TreeBuilder);

    this.EMPTY_ELEMENT_TAGS = new Set([// These are from HTML5.
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr', // These are from earlier versions of HTML and are removed in HTML5.
    'basefont', 'bgsound', 'command', 'frame', 'image', 'isindex', 'nextid', 'spacer']);
  }

  _createClass(TreeBuilder, [{
    key: "canBeEmptyElement",
    value: function canBeEmptyElement(name) {
      return this.EMPTY_ELEMENT_TAGS.has(name);
    }
  }]);

  return TreeBuilder;
}();

exports["default"] = TreeBuilder;