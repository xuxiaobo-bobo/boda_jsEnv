// CSSMathSum对象

bodavm.memory.globalobj['CSSMathSum'] = function CSSMathSum() {
  console.log_copy('CSSMathSum 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSMathSum)) {
    return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathSum': Arguments can't be empty");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathSum'], "CSSMathSum");
bodavm.memory.globalobj['CSSMathSum'].prototype.__proto__ = bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathSum'].__proto__ = bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathSum', "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathSum'].prototype, "CSSMathSum", "values_get", arguments);
  },
  set: undefined
}, 'prototype');