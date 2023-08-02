// SVGFEDisplacementMapElement对象

SVGFEDisplacementMapElement = function SVGFEDisplacementMapElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEDisplacementMapElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEDisplacementMapElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEDisplacementMapElement, "SVGFEDisplacementMapElement");
SVGFEDisplacementMapElement.prototype.__proto__ = SVGElement.prototype;
SVGFEDisplacementMapElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement, "SVG_CHANNEL_A", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement, "SVG_CHANNEL_B", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement, "SVG_CHANNEL_G", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement, "SVG_CHANNEL_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement, "SVG_CHANNEL_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "SVG_CHANNEL_A", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "SVG_CHANNEL_B", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "SVG_CHANNEL_G", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "SVG_CHANNEL_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "SVG_CHANNEL_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "in2", {
  configurable: true,
  enumerable: true,
  get: function in2() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "in2_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "scale", {
  configurable: true,
  enumerable: true,
  get: function scale() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "scale_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "xChannelSelector", {
  configurable: true,
  enumerable: true,
  get: function xChannelSelector() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "xChannelSelector_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "yChannelSelector", {
  configurable: true,
  enumerable: true,
  get: function yChannelSelector() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "yChannelSelector_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDisplacementMapElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDisplacementMapElement.prototype, "SVGFEDisplacementMapElement", "result_get", arguments);
  },
  set: undefined
});