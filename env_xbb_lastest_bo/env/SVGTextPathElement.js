// SVGTextPathElement对象

SVGTextPathElement = function SVGTextPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTextPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTextPathElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTextPathElement, "SVGTextPathElement");
SVGTextPathElement.prototype.__proto__ = SVGTextContentElement.prototype;
SVGTextPathElement.__proto__ = SVGTextContentElement;
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "TEXTPATH_SPACINGTYPE_EXACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "TEXTPATH_SPACINGTYPE_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "TEXTPATH_SPACINGTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "TEXTPATH_METHODTYPE_STRETCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "TEXTPATH_METHODTYPE_ALIGN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "TEXTPATH_METHODTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "TEXTPATH_SPACINGTYPE_EXACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "TEXTPATH_SPACINGTYPE_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "TEXTPATH_SPACINGTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "TEXTPATH_METHODTYPE_STRETCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "TEXTPATH_METHODTYPE_ALIGN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "TEXTPATH_METHODTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "startOffset", {
  configurable: true,
  enumerable: true,
  get: function startOffset() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPathElement.prototype, "SVGTextPathElement", "startOffset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "method", {
  configurable: true,
  enumerable: true,
  get: function method() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPathElement.prototype, "SVGTextPathElement", "method_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "spacing", {
  configurable: true,
  enumerable: true,
  get: function spacing() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPathElement.prototype, "SVGTextPathElement", "spacing_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPathElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPathElement.prototype, "SVGTextPathElement", "href_get", arguments);
  },
  set: undefined
});