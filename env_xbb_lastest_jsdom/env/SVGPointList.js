// SVGPointList对象

bodavm.memory.globalobj['SVGPointList'] = function SVGPointList() {
  console.log_copy('SVGPointList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGPointList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPointList'], "SVGPointList");
bodavm.toolsFunc.defineProperty('SVGPointList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "numberOfItems_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "appendItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "getItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "initialize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "insertItemBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "removeItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPointList', "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPointList'].prototype, "SVGPointList", "replaceItem", arguments);
  }
}, 'prototype');