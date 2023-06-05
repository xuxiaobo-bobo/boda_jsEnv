// SVGPolylineElement对象

bodavm.memory.globalobj['SVGPolylineElement'] = function SVGPolylineElement() {
  console.log_copy('SVGPolylineElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGPolylineElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPolylineElement'], "SVGPolylineElement");
bodavm.memory.globalobj['SVGPolylineElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGeometryElement'].prototype;
bodavm.memory.globalobj['SVGPolylineElement'].__proto__ = bodavm.memory.globalobj['SVGGeometryElement'];
bodavm.toolsFunc.defineProperty('SVGPolylineElement', "points", {
  configurable: true,
  enumerable: true,
  get: function points() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPolylineElement'].prototype, "SVGPolylineElement", "points_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPolylineElement', "animatedPoints", {
  configurable: true,
  enumerable: true,
  get: function animatedPoints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPolylineElement'].prototype, "SVGPolylineElement", "animatedPoints_get", arguments);
  },
  set: undefined
}, 'prototype');