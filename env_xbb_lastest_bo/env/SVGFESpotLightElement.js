// SVGFESpotLightElement对象

SVGFESpotLightElement = function SVGFESpotLightElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFESpotLightElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFESpotLightElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFESpotLightElement, "SVGFESpotLightElement");
SVGFESpotLightElement.prototype.__proto__ = SVGElement.prototype;
SVGFESpotLightElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "z_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "pointsAtX", {
  configurable: true,
  enumerable: true,
  get: function pointsAtX() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "pointsAtX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "pointsAtY", {
  configurable: true,
  enumerable: true,
  get: function pointsAtY() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "pointsAtY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "pointsAtZ", {
  configurable: true,
  enumerable: true,
  get: function pointsAtZ() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "pointsAtZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "specularExponent", {
  configurable: true,
  enumerable: true,
  get: function specularExponent() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "specularExponent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpotLightElement.prototype, "limitingConeAngle", {
  configurable: true,
  enumerable: true,
  get: function limitingConeAngle() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpotLightElement.prototype, "SVGFESpotLightElement", "limitingConeAngle_get", arguments);
  },
  set: undefined
});