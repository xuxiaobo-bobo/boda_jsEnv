"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This is a dom element access adapter for JSSoup
var JSSoupAdapter = /*#__PURE__*/function () {
  function JSSoupAdapter() {
    _classCallCheck(this, JSSoupAdapter);
  }

  _createClass(JSSoupAdapter, [{
    key: "descendants",
    value: function descendants(domElement) {
      return domElement.descendants.filter(this.isTagElement);
    }
  }, {
    key: "children",
    value: function children(domElement) {
      return domElement.contents.filter(this.isTagElement);
    }
  }, {
    key: "nextSibling",
    value: function nextSibling(domElement) {
      var nextSiblings = this.nextSiblings(domElement);
      if (nextSiblings.length > 0) return nextSiblings[0];
      return null;
    }
  }, {
    key: "nextSiblings",
    value: function nextSiblings(domElement) {
      return domElement.nextSiblings.filter(this.isTagElement);
    }
  }, {
    key: "elementName",
    value: function elementName(domElement) {
      return domElement.name;
    }
  }, {
    key: "attributes",
    value: function attributes(domElement) {
      return domElement.attrs;
    }
  }, {
    key: "name",
    value: function name(domElement) {
      return domElement.name;
    }
  }, {
    key: "isTagElement",
    value: function isTagElement(domElement) {
      return domElement.constructor.name == "SoupTag";
    }
  }]);

  return JSSoupAdapter;
}();

exports["default"] = JSSoupAdapter;