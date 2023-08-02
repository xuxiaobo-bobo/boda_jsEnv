// CSSMathMin对象

CSSMathMin = function CSSMathMin() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathMin)) {
    return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathMin': Arguments can't be empty");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathMin 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathMin, "CSSMathMin");
CSSMathMin.prototype.__proto__ = CSSMathValue.prototype;
CSSMathMin.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathMin.prototype, "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSMathMin.prototype, "CSSMathMin", "values_get", arguments);
  },
  set: undefined
});