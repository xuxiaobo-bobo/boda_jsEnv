// SVGAnimateTransformElement对象

SVGAnimateTransformElement = function SVGAnimateTransformElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimateTransformElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimateTransformElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimateTransformElement, "SVGAnimateTransformElement");
SVGAnimateTransformElement.prototype.__proto__ = SVGAnimationElement.prototype;
SVGAnimateTransformElement.__proto__ = SVGAnimationElement;