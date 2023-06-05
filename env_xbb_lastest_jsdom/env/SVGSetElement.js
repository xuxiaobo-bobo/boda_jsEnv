// SVGSetElement对象

bodavm.memory.globalobj['SVGSetElement'] = function SVGSetElement() {
  console.log_copy('SVGSetElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGSetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGSetElement'], "SVGSetElement");
bodavm.memory.globalobj['SVGSetElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGAnimationElement'].prototype;
bodavm.memory.globalobj['SVGSetElement'].__proto__ = bodavm.memory.globalobj['SVGAnimationElement'];