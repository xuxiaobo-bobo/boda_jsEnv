// CSSMathMax对象

bodavm.memory.globalobj['CSSMathMax'] = function CSSMathMax() {
  console.log_copy('CSSMathMax 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSMathMax)) {
    return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathMax': Arguments can't be empty");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathMax'], "CSSMathMax");
bodavm.memory.globalobj['CSSMathMax'].prototype.__proto__ = bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathMax'].__proto__ = bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathMax', "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathMax'].prototype, "CSSMathMax", "values_get", arguments);
  },
  set: undefined
}, 'prototype');