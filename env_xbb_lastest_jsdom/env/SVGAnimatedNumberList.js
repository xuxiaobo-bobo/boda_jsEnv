// SVGAnimatedNumberList对象

bodavm.memory.globalobj['SVGAnimatedNumberList'] = function SVGAnimatedNumberList() {
  console.log_copy('SVGAnimatedNumberList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimatedNumberList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimatedNumberList'], "SVGAnimatedNumberList");
bodavm.toolsFunc.defineProperty('SVGAnimatedNumberList', "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedNumberList'].prototype, "SVGAnimatedNumberList", "baseVal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimatedNumberList', "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimatedNumberList'].prototype, "SVGAnimatedNumberList", "animVal_get", arguments);
  },
  set: undefined
}, 'prototype');