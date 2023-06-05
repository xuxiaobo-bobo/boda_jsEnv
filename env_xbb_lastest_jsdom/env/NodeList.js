// NodeList对象

bodavm.memory.globalobj['NodeList'] = function NodeList() {
  console.log_copy('NodeList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NodeList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NodeList'], "NodeList");
bodavm.toolsFunc.defineProperty('NodeList', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "values", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "item", arguments);
  }
}, 'prototype');