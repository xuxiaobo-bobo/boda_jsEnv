// SVGAnimateMotionElement对象

SVGAnimateMotionElement = function SVGAnimateMotionElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimateMotionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimateMotionElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimateMotionElement, "SVGAnimateMotionElement");
SVGAnimateMotionElement.prototype.__proto__ = SVGAnimationElement.prototype;
SVGAnimateMotionElement.__proto__ = SVGAnimationElement;