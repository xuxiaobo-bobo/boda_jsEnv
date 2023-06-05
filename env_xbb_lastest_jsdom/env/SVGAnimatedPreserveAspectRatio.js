// SVGAnimatedPreserveAspectRatio对象

bodavm.memory.globalobj['SVGAnimatedPreserveAspectRatio'] = function SVGAnimatedPreserveAspectRatio() {
  console.log_copy('SVGAnimatedPreserveAspectRatio 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedPreserveAspectRatio)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedPreserveAspectRatio'], "SVGAnimatedPreserveAspectRatio");
bodavm.toolsFunc.defineProperty('SVGAnimatedPreserveAspectRatio', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedPreserveAspectRatio'].prototype, "SVGAnimatedPreserveAspectRatio", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedPreserveAspectRatio', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedPreserveAspectRatio'].prototype, "SVGAnimatedPreserveAspectRatio", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');