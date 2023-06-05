// SVGAnimatedNumber对象

bodavm.memory.globalobj['SVGAnimatedNumber'] = function SVGAnimatedNumber() {
  console.log_copy('SVGAnimatedNumber 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedNumber)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedNumber'], "SVGAnimatedNumber");
bodavm.toolsFunc.defineProperty('SVGAnimatedNumber', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedNumber'].prototype, "SVGAnimatedNumber", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedNumber'].prototype, "SVGAnimatedNumber", "baseVal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedNumber', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedNumber'].prototype, "SVGAnimatedNumber", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');