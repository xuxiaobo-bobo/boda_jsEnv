// SVGDescElement对象

bodavm.memory.globalobj['SVGDescElement'] = function SVGDescElement() {
  console.log_copy('SVGDescElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGDescElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGDescElement'], "SVGDescElement");
bodavm.memory.globalobj['SVGDescElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGDescElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];