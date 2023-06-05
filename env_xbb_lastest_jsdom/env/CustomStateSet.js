// CustomStateSet对象

bodavm.memory.globalobj['CustomStateSet'] = function CustomStateSet() {
  console.log_copy('CustomStateSet 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CustomStateSet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CustomStateSet'], "CustomStateSet");
bodavm.toolsFunc.defineProperty('CustomStateSet', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "delete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CustomStateSet', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomStateSet'].prototype, "CustomStateSet", "values", arguments);
  }
}, 'prototype');