// HTMLUnknownElement对象

bodavm.memory.globalobj['HTMLUnknownElement'] = function HTMLUnknownElement() {
  console.log_copy('HTMLUnknownElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLUnknownElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLUnknownElement'], "HTMLUnknownElement");
bodavm.memory.globalobj['HTMLUnknownElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLUnknownElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];