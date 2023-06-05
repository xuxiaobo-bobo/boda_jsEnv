// SVGAnimatedLength对象

bodavm.memory.globalobj['SVGAnimatedLength'] = function SVGAnimatedLength() {
  console.log_copy('SVGAnimatedLength 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedLength)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedLength'], "SVGAnimatedLength");
bodavm.toolsFunc.defineProperty('SVGAnimatedLength', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedLength'].prototype, "SVGAnimatedLength", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedLength', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedLength'].prototype, "SVGAnimatedLength", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');