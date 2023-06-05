// HTMLUListElement对象

bodavm.memory.globalobj['HTMLUListElement'] = function HTMLUListElement() {
  console.log_copy('HTMLUListElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLUListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLUListElement'], "HTMLUListElement");
bodavm.memory.globalobj['HTMLUListElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLUListElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLUListElement', "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "compact_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLUListElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLUListElement'].prototype, "HTMLUListElement", "type_set", arguments);
  }
}, 'prototype');