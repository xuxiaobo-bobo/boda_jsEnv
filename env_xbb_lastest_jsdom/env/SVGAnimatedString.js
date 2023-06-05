// SVGAnimatedString对象

bodavm.memory.globalobj['SVGAnimatedString'] = function SVGAnimatedString() {
  console.log_copy('SVGAnimatedString 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedString)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedString'], "SVGAnimatedString");
bodavm.toolsFunc.defineProperty('SVGAnimatedString', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedString'].prototype, "SVGAnimatedString", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedString'].prototype, "SVGAnimatedString", "baseVal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedString', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedString'].prototype, "SVGAnimatedString", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');