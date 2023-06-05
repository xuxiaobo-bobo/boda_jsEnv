// SVGAnimatedLengthList对象

bodavm.memory.globalobj['SVGAnimatedLengthList'] = function SVGAnimatedLengthList() {
  console.log_copy('SVGAnimatedLengthList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedLengthList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedLengthList'], "SVGAnimatedLengthList");
bodavm.toolsFunc.defineProperty('SVGAnimatedLengthList', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedLengthList'].prototype, "SVGAnimatedLengthList", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedLengthList', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedLengthList'].prototype, "SVGAnimatedLengthList", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');