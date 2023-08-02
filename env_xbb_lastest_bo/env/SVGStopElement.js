// SVGStopElement对象

SVGStopElement = function SVGStopElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGStopElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGStopElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGStopElement, "SVGStopElement");
SVGStopElement.prototype.__proto__ = SVGElement.prototype;
SVGStopElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGStopElement.prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: function offset() {
    return bodavm.toolsFunc.dispatch(this, SVGStopElement.prototype, "SVGStopElement", "offset_get", arguments);
  },
  set: undefined
});