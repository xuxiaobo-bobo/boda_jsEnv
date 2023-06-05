// Crypto对象

bodavm.memory.globalobj['Crypto'] = function Crypto() {
  console.log_copy('Crypto 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Crypto)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Crypto'], "Crypto");
bodavm.toolsFunc.defineProperty('Crypto', "getRandomValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRandomValues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Crypto'].prototype, "Crypto", "getRandomValues", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Crypto', "subtle", {
  configurable: true,
  enumerable: true,
  get: function subtle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Crypto'].prototype, "Crypto", "subtle_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Crypto', "randomUUID", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function randomUUID() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Crypto'].prototype, "Crypto", "randomUUID", arguments);
  }
}, 'prototype');

// crypto对象

bodavm.memory.globalobj['crypto'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['crypto'].__proto__ = bodavm.memory.globalobj['Crypto'].prototype;