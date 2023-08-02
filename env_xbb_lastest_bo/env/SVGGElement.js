// SVGGElement对象

SVGGElement = function SVGGElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGGElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGGElement, "SVGGElement");
SVGGElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGGElement.__proto__ = SVGGraphicsElement;