// SVGAnimatedInteger对象

bodavm.memory.globalobj['SVGAnimatedInteger'] = function SVGAnimatedInteger() {
  console.log_copy('SVGAnimatedInteger 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedInteger)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedInteger'], "SVGAnimatedInteger");
bodavm.toolsFunc.defineProperty('SVGAnimatedInteger', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedInteger'].prototype, "SVGAnimatedInteger", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedInteger'].prototype, "SVGAnimatedInteger", "baseVal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedInteger', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedInteger'].prototype, "SVGAnimatedInteger", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');