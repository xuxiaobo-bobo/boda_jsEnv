// SVGAnimatedRect对象

bodavm.memory.globalobj['SVGAnimatedRect'] = function SVGAnimatedRect() {
  console.log_copy('SVGAnimatedRect 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedRect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedRect'], "SVGAnimatedRect");
bodavm.toolsFunc.defineProperty('SVGAnimatedRect', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedRect'].prototype, "SVGAnimatedRect", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedRect', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedRect'].prototype, "SVGAnimatedRect", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');