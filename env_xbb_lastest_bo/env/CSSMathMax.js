// CSSMathMax对象

CSSMathMax = function CSSMathMax() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathMax)) {
    return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathMax': Arguments can't be empty");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathMax 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathMax, "CSSMathMax");
CSSMathMax.prototype.__proto__ = CSSMathValue.prototype;
CSSMathMax.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathMax.prototype, "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSMathMax.prototype, "CSSMathMax", "values_get", arguments);
  },
  set: undefined
});