// SVGGeometryElement对象

bodavm.memory.globalobj['SVGGeometryElement'] = function SVGGeometryElement() {
  console.log_copy('SVGGeometryElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGGeometryElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGGeometryElement'], "SVGGeometryElement");
bodavm.memory.globalobj['SVGGeometryElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGGeometryElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGGeometryElement', "pathLength", {
  configurable: true,
  enumerable: true,
  get: function pathLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGeometryElement'].prototype, "SVGGeometryElement", "pathLength_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGeometryElement', "getPointAtLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPointAtLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGeometryElement'].prototype, "SVGGeometryElement", "getPointAtLength", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGeometryElement', "getTotalLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTotalLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGeometryElement'].prototype, "SVGGeometryElement", "getTotalLength", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGeometryElement', "isPointInFill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInFill() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGeometryElement'].prototype, "SVGGeometryElement", "isPointInFill", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGGeometryElement', "isPointInStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInStroke() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGGeometryElement'].prototype, "SVGGeometryElement", "isPointInStroke", arguments);
  }
}, 'prototype');