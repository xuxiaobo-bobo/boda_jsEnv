// CookieStoreManager对象

bodavm.memory.globalobj['CookieStoreManager'] = function CookieStoreManager() {
  console.log_copy('CookieStoreManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CookieStoreManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CookieStoreManager'], "CookieStoreManager");
bodavm.toolsFunc.defineProperty('CookieStoreManager', "getSubscriptions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSubscriptions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStoreManager'].prototype, "CookieStoreManager", "getSubscriptions", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CookieStoreManager', "subscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function subscribe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStoreManager'].prototype, "CookieStoreManager", "subscribe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CookieStoreManager', "unsubscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsubscribe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CookieStoreManager'].prototype, "CookieStoreManager", "unsubscribe", arguments);
  }
}, 'prototype');