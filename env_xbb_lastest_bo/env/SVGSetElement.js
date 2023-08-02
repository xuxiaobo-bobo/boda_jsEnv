// SVGSetElement对象

SVGSetElement = function SVGSetElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGSetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGSetElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGSetElement, "SVGSetElement");
SVGSetElement.prototype.__proto__ = SVGAnimationElement.prototype;
SVGSetElement.__proto__ = SVGAnimationElement;