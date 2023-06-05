// CSSMathInvert对象

bodavm.memory.globalobj['CSSMathInvert'] = function CSSMathInvert() {
  console.log_copy('CSSMathInvert 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSMathInvert)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathInvert': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathInvert'], "CSSMathInvert");
bodavm.memory.globalobj['CSSMathInvert'].prototype.__proto__ = bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathInvert'].__proto__ = bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathInvert', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathInvert'].prototype, "CSSMathInvert", "value_get", arguments);
  },
  set: undefined
}, 'prototype');