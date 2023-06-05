// SVGAnimateMotionElement对象

bodavm.memory.globalobj['SVGAnimateMotionElement'] = function SVGAnimateMotionElement() {
  console.log_copy('SVGAnimateMotionElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimateMotionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimateMotionElement'], "SVGAnimateMotionElement");
bodavm.memory.globalobj['SVGAnimateMotionElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGAnimationElement'].prototype;
bodavm.memory.globalobj['SVGAnimateMotionElement'].__proto__ = bodavm.memory.globalobj['SVGAnimationElement'];