// HTMLDListElement对象

bodavm.memory.globalobj['HTMLDListElement'] = function HTMLDListElement() {
  console.log_copy('HTMLDListElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLDListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDListElement'], "HTMLDListElement");
bodavm.memory.globalobj['HTMLDListElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDListElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDListElement', "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDListElement'].prototype, "HTMLDListElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDListElement'].prototype, "HTMLDListElement", "compact_set", arguments);
  }
}, 'prototype');