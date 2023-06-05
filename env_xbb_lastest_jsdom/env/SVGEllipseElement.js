// SVGEllipseElement对象

bodavm.memory.globalobj['SVGEllipseElement'] = function SVGEllipseElement() {
  console.log_copy('SVGEllipseElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGEllipseElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGEllipseElement'], "SVGEllipseElement");
bodavm.memory.globalobj['SVGEllipseElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGEllipseElement'].__proto__ = bodavm.memory.globalobj['SVGGeometryElement'];
bodavm.toolsFunc.defineProperty('SVGEllipseElement', "cx", {
  configurable: true,
  enumerable: true,
  get: function cx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGEllipseElement'].prototype, "SVGEllipseElement", "cx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGEllipseElement', "cy", {
  configurable: true,
  enumerable: true,
  get: function cy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGEllipseElement'].prototype, "SVGEllipseElement", "cy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGEllipseElement', "rx", {
  configurable: true,
  enumerable: true,
  get: function rx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGEllipseElement'].prototype, "SVGEllipseElement", "rx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGEllipseElement', "ry", {
  configurable: true,
  enumerable: true,
  get: function ry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGEllipseElement'].prototype, "SVGEllipseElement", "ry_get", arguments);
  },
  set: undefined
}, 'prototype');