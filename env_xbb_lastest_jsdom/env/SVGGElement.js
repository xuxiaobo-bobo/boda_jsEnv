// SVGGElement对象

bodavm.memory.globalobj['SVGGElement'] = function SVGGElement() {
  console.log_copy('SVGGElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGGElement'], "SVGGElement");
bodavm.memory.globalobj['SVGGElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGGElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];