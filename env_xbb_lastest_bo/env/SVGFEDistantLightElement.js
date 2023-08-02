// SVGFEDistantLightElement对象

SVGFEDistantLightElement = function SVGFEDistantLightElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEDistantLightElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEDistantLightElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEDistantLightElement, "SVGFEDistantLightElement");
SVGFEDistantLightElement.prototype.__proto__ = SVGElement.prototype;
SVGFEDistantLightElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEDistantLightElement.prototype, "azimuth", {
  configurable: true,
  enumerable: true,
  get: function azimuth() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDistantLightElement.prototype, "SVGFEDistantLightElement", "azimuth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDistantLightElement.prototype, "elevation", {
  configurable: true,
  enumerable: true,
  get: function elevation() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDistantLightElement.prototype, "SVGFEDistantLightElement", "elevation_get", arguments);
  },
  set: undefined
});