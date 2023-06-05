// Headers对象

bodavm.memory.globalobj['Headers'] = function Headers() {
  console.log_copy('Headers 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Headers();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Headers'], "Headers");
bodavm.toolsFunc.defineProperty('Headers', "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "append", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "delete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Headers', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Headers'].prototype, "Headers", "values", arguments);
  }
}, 'prototype');