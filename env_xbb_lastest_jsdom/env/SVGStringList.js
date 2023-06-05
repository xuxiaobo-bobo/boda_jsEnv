// SVGStringList对象

bodavm.memory.globalobj['SVGStringList'] = function SVGStringList() {
  console.log_copy('SVGStringList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGStringList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGStringList'], "SVGStringList");
bodavm.toolsFunc.defineProperty('SVGStringList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "numberOfItems_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "appendItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "getItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "initialize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "insertItemBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "removeItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStringList', "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStringList'].prototype, "SVGStringList", "replaceItem", arguments);
  }
}, 'prototype');