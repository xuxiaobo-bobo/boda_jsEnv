// SVGAnimateElement对象

bodavm.memory.globalobj['SVGAnimateElement'] = function SVGAnimateElement() {
  console.log_copy('SVGAnimateElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimateElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimateElement'], "SVGAnimateElement");
bodavm.memory.globalobj['SVGAnimateElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGAnimationElement'].prototype;
bodavm.memory.globalobj['SVGAnimateElement'].__proto__ = bodavm.memory.globalobj['SVGAnimationElement'];