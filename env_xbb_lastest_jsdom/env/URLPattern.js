// URLPattern对象

bodavm.memory.globalobj['URLPattern'] = function URLPattern() {
  console.log_copy('URLPattern 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.URLPattern();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['URLPattern'], "URLPattern");
bodavm.toolsFunc.defineProperty('URLPattern', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "protocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "username_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "password_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "hostname_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "port_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "pathname_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "search_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "hash_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "exec", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exec() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "exec", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URLPattern', "test", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function test() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URLPattern'].prototype, "URLPattern", "test", arguments);
  }
}, 'prototype');