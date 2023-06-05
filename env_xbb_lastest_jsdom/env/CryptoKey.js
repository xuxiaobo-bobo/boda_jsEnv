// CryptoKey对象

bodavm.memory.globalobj['CryptoKey'] = function CryptoKey() {
  console.log_copy('CryptoKey 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CryptoKey)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CryptoKey'], "CryptoKey");
bodavm.toolsFunc.defineProperty('CryptoKey', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CryptoKey'].prototype, "CryptoKey", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CryptoKey', "extractable", {
  configurable: true,
  enumerable: true,
  get: function extractable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CryptoKey'].prototype, "CryptoKey", "extractable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CryptoKey', "algorithm", {
  configurable: true,
  enumerable: true,
  get: function algorithm() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CryptoKey'].prototype, "CryptoKey", "algorithm_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CryptoKey', "usages", {
  configurable: true,
  enumerable: true,
  get: function usages() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CryptoKey'].prototype, "CryptoKey", "usages_get", arguments);
  },
  set: undefined
}, 'prototype');