// SVGTextContentElement对象

SVGTextContentElement = function SVGTextContentElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTextContentElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTextContentElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTextContentElement, "SVGTextContentElement");
SVGTextContentElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGTextContentElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGTextContentElement, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "textLength", {
  configurable: true,
  enumerable: true,
  get: function textLength() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "textLength_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "lengthAdjust", {
  configurable: true,
  enumerable: true,
  get: function lengthAdjust() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "lengthAdjust_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getCharNumAtPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharNumAtPosition() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getCharNumAtPosition", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getComputedTextLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getComputedTextLength() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getComputedTextLength", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getEndPositionOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEndPositionOfChar() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getEndPositionOfChar", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getExtentOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getExtentOfChar() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getExtentOfChar", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getNumberOfChars", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNumberOfChars() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getNumberOfChars", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getRotationOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRotationOfChar() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getRotationOfChar", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getStartPositionOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStartPositionOfChar() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getStartPositionOfChar", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "getSubStringLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSubStringLength() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "getSubStringLength", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTextContentElement.prototype, "selectSubString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectSubString() {
    return bodavm.toolsFunc.dispatch(this, SVGTextContentElement.prototype, "SVGTextContentElement", "selectSubString", arguments);
  }
});