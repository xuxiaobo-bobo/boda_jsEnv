// SVGClipPathElement对象

SVGClipPathElement = function SVGClipPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGClipPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGClipPathElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGClipPathElement, "SVGClipPathElement");
SVGClipPathElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGClipPathElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGClipPathElement.prototype, "clipPathUnits", {
  configurable: true,
  enumerable: true,
  get: function clipPathUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGClipPathElement.prototype, "SVGClipPathElement", "clipPathUnits_get", arguments);
  },
  set: undefined
});