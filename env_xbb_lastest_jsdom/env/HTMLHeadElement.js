// HTMLHeadElement对象

bodavm.memory.globalobj['HTMLHeadElement'] = function HTMLHeadElement() {
  console.log_copy('HTMLHeadElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLHeadElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLHeadElement'], "HTMLHeadElement");
bodavm.memory.globalobj['HTMLHeadElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLHeadElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];