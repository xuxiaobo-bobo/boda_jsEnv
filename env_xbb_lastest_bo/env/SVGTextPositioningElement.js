// SVGTextPositioningElement对象

SVGTextPositioningElement = function SVGTextPositioningElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTextPositioningElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTextPositioningElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTextPositioningElement, "SVGTextPositioningElement");
SVGTextPositioningElement.prototype.__proto__ = SVGTextContentElement.prototype;
SVGTextPositioningElement.__proto__ = SVGTextContentElement;
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPositioningElement.prototype, "SVGTextPositioningElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPositioningElement.prototype, "SVGTextPositioningElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement.prototype, "dx", {
  configurable: true,
  enumerable: true,
  get: function dx() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPositioningElement.prototype, "SVGTextPositioningElement", "dx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement.prototype, "dy", {
  configurable: true,
  enumerable: true,
  get: function dy() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPositioningElement.prototype, "SVGTextPositioningElement", "dy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTextPositioningElement.prototype, "rotate", {
  configurable: true,
  enumerable: true,
  get: function rotate() {
    return bodavm.toolsFunc.dispatch(this, SVGTextPositioningElement.prototype, "SVGTextPositioningElement", "rotate_get", arguments);
  },
  set: undefined
});