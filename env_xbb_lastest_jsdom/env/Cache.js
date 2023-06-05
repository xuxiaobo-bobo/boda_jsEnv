// Cache对象

bodavm.memory.globalobj['Cache'] = function Cache() {
  console.log_copy('Cache 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Cache)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Cache'], "Cache");
bodavm.toolsFunc.defineProperty('Cache', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Cache', "addAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "addAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Cache', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "delete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Cache', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Cache', "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function match() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "match", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Cache', "matchAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matchAll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "matchAll", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Cache', "put", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function put() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Cache'].prototype, "Cache", "put", arguments);
  }
}, 'prototype');