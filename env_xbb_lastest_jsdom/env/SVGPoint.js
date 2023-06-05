// SVGPoint对象

bodavm.memory.globalobj['SVGPoint'] = function SVGPoint() {
  console.log_copy('SVGPoint 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGPoint)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPoint'], "SVGPoint");
bodavm.toolsFunc.defineProperty('SVGPoint', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPoint'].prototype, "SVGPoint", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPoint'].prototype, "SVGPoint", "x_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPoint', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPoint'].prototype, "SVGPoint", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPoint'].prototype, "SVGPoint", "y_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPoint', "matrixTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matrixTransform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPoint'].prototype, "SVGPoint", "matrixTransform", arguments);
  }
}, 'prototype');