// SVGFEPointLightElement对象

SVGFEPointLightElement = function SVGFEPointLightElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEPointLightElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEPointLightElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEPointLightElement, "SVGFEPointLightElement");
SVGFEPointLightElement.prototype.__proto__ = SVGElement.prototype;
SVGFEPointLightElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEPointLightElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEPointLightElement.prototype, "SVGFEPointLightElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEPointLightElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEPointLightElement.prototype, "SVGFEPointLightElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEPointLightElement.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, SVGFEPointLightElement.prototype, "SVGFEPointLightElement", "z_get", arguments);
  },
  set: undefined
});