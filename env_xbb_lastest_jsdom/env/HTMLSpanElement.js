// HTMLSpanElement对象

bodavm.memory.globalobj['HTMLSpanElement'] = function HTMLSpanElement() {
  console.log_copy('HTMLSpanElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLSpanElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLSpanElement'], "HTMLSpanElement");
bodavm.memory.globalobj['HTMLSpanElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLSpanElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];