// SVGPathElement对象

SVGPathElement = function SVGPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPathElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPathElement, "SVGPathElement");
SVGPathElement.prototype.__proto__ = SVGGeometryElement.prototype;
SVGPathElement.__proto__ = SVGGeometryElement;