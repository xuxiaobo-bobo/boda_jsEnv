// SVGAElement对象

SVGAElement = function SVGAElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAElement, "SVGAElement");
SVGAElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGAElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGAElement.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, SVGAElement.prototype, "SVGAElement", "target_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGAElement.prototype, "SVGAElement", "href_get", arguments);
  },
  set: undefined
});