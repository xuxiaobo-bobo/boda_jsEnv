// XRAnchorSet对象

bodavm.memory.globalobj['XRAnchorSet'] = function XRAnchorSet() {
  console.log_copy('XRAnchorSet 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRAnchorSet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRAnchorSet'], "XRAnchorSet");
bodavm.toolsFunc.defineProperty('XRAnchorSet', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchorSet'].prototype, "XRAnchorSet", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRAnchorSet', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchorSet'].prototype, "XRAnchorSet", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRAnchorSet', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchorSet'].prototype, "XRAnchorSet", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRAnchorSet', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchorSet'].prototype, "XRAnchorSet", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRAnchorSet', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchorSet'].prototype, "XRAnchorSet", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRAnchorSet', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchorSet'].prototype, "XRAnchorSet", "values", arguments);
  }
}, 'prototype');