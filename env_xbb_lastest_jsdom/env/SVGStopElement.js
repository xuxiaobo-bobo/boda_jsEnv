// SVGStopElement对象

bodavm.memory.globalobj['SVGStopElement'] = function SVGStopElement() {
  console.log_copy('SVGStopElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGStopElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGStopElement'], "SVGStopElement");
bodavm.memory.globalobj['SVGStopElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGStopElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGStopElement', "offset", {
  configurable: true,
  enumerable: true,
  get: function offset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStopElement'].prototype, "SVGStopElement", "offset_get", arguments);
  },
  set: undefined
}, 'prototype');