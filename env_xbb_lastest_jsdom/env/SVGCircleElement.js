// SVGCircleElement对象

bodavm.memory.globalobj['SVGCircleElement'] = function SVGCircleElement() {
  console.log_copy('SVGCircleElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGCircleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGCircleElement'], "SVGCircleElement");
bodavm.memory.globalobj['SVGCircleElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGCircleElement'].__proto__ = bodavm.memory.globalobj['SVGGeometryElement'];
bodavm.toolsFunc.defineProperty('SVGCircleElement', "cx", {
  configurable: true,
  enumerable: true,
  get: function cx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGCircleElement'].prototype, "SVGCircleElement", "cx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGCircleElement', "cy", {
  configurable: true,
  enumerable: true,
  get: function cy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGCircleElement'].prototype, "SVGCircleElement", "cy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGCircleElement', "r", {
  configurable: true,
  enumerable: true,
  get: function r() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGCircleElement'].prototype, "SVGCircleElement", "r_get", arguments);
  },
  set: undefined
}, 'prototype');