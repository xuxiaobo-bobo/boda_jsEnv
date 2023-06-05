// HTMLDetailsElement对象

bodavm.memory.globalobj['HTMLDetailsElement'] = function HTMLDetailsElement() {
  console.log_copy('HTMLDetailsElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLDetailsElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDetailsElement'], "HTMLDetailsElement");
bodavm.memory.globalobj['HTMLDetailsElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDetailsElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDetailsElement', "open", {
  configurable: true,
  enumerable: true,
  get: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDetailsElement'].prototype, "HTMLDetailsElement", "open_get", arguments);
  },
  set: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDetailsElement'].prototype, "HTMLDetailsElement", "open_set", arguments);
  }
}, 'prototype');