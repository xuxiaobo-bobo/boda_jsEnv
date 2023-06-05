// NavigationDestination对象

bodavm.memory.globalobj['NavigationDestination'] = function NavigationDestination() {
  console.log_copy('NavigationDestination 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigationDestination)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigationDestination'], "NavigationDestination");
bodavm.toolsFunc.defineProperty('NavigationDestination', "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationDestination'].prototype, "NavigationDestination", "key_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationDestination', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationDestination'].prototype, "NavigationDestination", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationDestination', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationDestination'].prototype, "NavigationDestination", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationDestination', "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationDestination'].prototype, "NavigationDestination", "index_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationDestination', "sameDocument", {
  configurable: true,
  enumerable: true,
  get: function sameDocument() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationDestination'].prototype, "NavigationDestination", "sameDocument_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationDestination', "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationDestination'].prototype, "NavigationDestination", "getState", arguments);
  }
}, 'prototype');