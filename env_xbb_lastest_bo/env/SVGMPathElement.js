// SVGMPathElement对象

SVGMPathElement = function SVGMPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGMPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGMPathElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGMPathElement, "SVGMPathElement");
SVGMPathElement.prototype.__proto__ = SVGElement.prototype;
SVGMPathElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGMPathElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGMPathElement.prototype, "SVGMPathElement", "href_get", arguments);
  },
  set: undefined
});