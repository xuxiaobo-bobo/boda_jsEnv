// SVGAnimateElement对象

SVGAnimateElement = function SVGAnimateElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimateElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimateElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimateElement, "SVGAnimateElement");
SVGAnimateElement.prototype.__proto__ = SVGAnimationElement.prototype;
SVGAnimateElement.__proto__ = SVGAnimationElement;