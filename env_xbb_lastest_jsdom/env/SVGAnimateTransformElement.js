// SVGAnimateTransformElement对象

bodavm.memory.globalobj['SVGAnimateTransformElement'] = function SVGAnimateTransformElement() {
  console.log_copy('SVGAnimateTransformElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimateTransformElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimateTransformElement'], "SVGAnimateTransformElement");
bodavm.memory.globalobj['SVGAnimateTransformElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGAnimationElement'].prototype;
bodavm.memory.globalobj['SVGAnimateTransformElement'].__proto__ = bodavm.memory.globalobj['SVGAnimationElement'];