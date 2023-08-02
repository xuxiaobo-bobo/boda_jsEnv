// SVGFEDropShadowElement对象

SVGFEDropShadowElement = function SVGFEDropShadowElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEDropShadowElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEDropShadowElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEDropShadowElement, "SVGFEDropShadowElement");
SVGFEDropShadowElement.prototype.__proto__ = SVGElement.prototype;
SVGFEDropShadowElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "dx", {
  configurable: true,
  enumerable: true,
  get: function dx() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "dx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "dy", {
  configurable: true,
  enumerable: true,
  get: function dy() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "dy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "stdDeviationX", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "stdDeviationX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "stdDeviationY", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "stdDeviationY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "result_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDropShadowElement.prototype, "setStdDeviation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStdDeviation() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDropShadowElement.prototype, "SVGFEDropShadowElement", "setStdDeviation", arguments);
  }
});