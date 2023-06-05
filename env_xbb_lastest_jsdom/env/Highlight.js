// Highlight对象

bodavm.memory.globalobj['Highlight'] = function Highlight() {
  console.log_copy('Highlight 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Highlight();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Highlight'], "Highlight");
bodavm.toolsFunc.defineProperty('Highlight', "priority", {
  configurable: true,
  enumerable: true,
  get: function priority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "priority_get", arguments);
  },
  set: function priority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "priority_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "delete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Highlight', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Highlight'].prototype, "Highlight", "values", arguments);
  }
}, 'prototype');