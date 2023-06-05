// KeyboardLayoutMap对象

bodavm.memory.globalobj['KeyboardLayoutMap'] = function KeyboardLayoutMap() {
  console.log_copy('KeyboardLayoutMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof KeyboardLayoutMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['KeyboardLayoutMap'], "KeyboardLayoutMap");
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('KeyboardLayoutMap', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['KeyboardLayoutMap'].prototype, "KeyboardLayoutMap", "values", arguments);
  }
}, 'prototype');