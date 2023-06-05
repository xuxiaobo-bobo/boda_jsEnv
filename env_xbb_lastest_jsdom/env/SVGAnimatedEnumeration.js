// SVGAnimatedEnumeration对象

bodavm.memory.globalobj['SVGAnimatedEnumeration'] = function SVGAnimatedEnumeration() {
  console.log_copy('SVGAnimatedEnumeration 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedEnumeration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedEnumeration'], "SVGAnimatedEnumeration");
bodavm.toolsFunc.defineProperty('SVGAnimatedEnumeration', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedEnumeration'].prototype, "SVGAnimatedEnumeration", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedEnumeration'].prototype, "SVGAnimatedEnumeration", "baseVal_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedEnumeration', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedEnumeration'].prototype, "SVGAnimatedEnumeration", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');