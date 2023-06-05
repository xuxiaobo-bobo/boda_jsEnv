// SVGTransformList对象

bodavm.memory.globalobj['SVGTransformList'] = function SVGTransformList() {
  console.log_copy('SVGTransformList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTransformList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTransformList'], "SVGTransformList");
bodavm.toolsFunc.defineProperty('SVGTransformList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "numberOfItems_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "appendItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "clear", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "consolidate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function consolidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "consolidate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "createSVGTransformFromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGTransformFromMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "createSVGTransformFromMatrix", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "getItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "initialize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "insertItemBefore", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "removeItem", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransformList', "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransformList'].prototype, "SVGTransformList", "replaceItem", arguments);
  }
}, 'prototype');