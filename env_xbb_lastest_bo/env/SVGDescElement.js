// SVGDescElement对象

SVGDescElement = function SVGDescElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGDescElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGDescElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGDescElement, "SVGDescElement");
SVGDescElement.prototype.__proto__ = SVGElement.prototype;
SVGDescElement.__proto__ = SVGElement;