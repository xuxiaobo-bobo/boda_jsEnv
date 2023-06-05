// DOMTokenList对象

bodavm.memory.globalobj['DOMTokenList'] = function DOMTokenList() {
  console.log_copy('DOMTokenList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DOMTokenList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMTokenList'], "DOMTokenList");
bodavm.toolsFunc.defineProperty('DOMTokenList', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "values", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "add", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function contains() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "contains", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "replace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "replace", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "supports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function supports() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "supports", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "toggle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toggle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "toggle", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMTokenList', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMTokenList'].prototype, "DOMTokenList", "toString", arguments);
  }
}, 'prototype');