// SVGDefsElement对象

SVGDefsElement = function SVGDefsElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGDefsElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGDefsElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGDefsElement, "SVGDefsElement");
SVGDefsElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGDefsElement.__proto__ = SVGGraphicsElement;