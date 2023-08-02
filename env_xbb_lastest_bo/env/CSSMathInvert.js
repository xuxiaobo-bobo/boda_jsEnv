// CSSMathInvert对象

CSSMathInvert = function CSSMathInvert() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathInvert)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathInvert': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathInvert 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathInvert, "CSSMathInvert");
CSSMathInvert.prototype.__proto__ = CSSMathValue.prototype;
CSSMathInvert.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathInvert.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, CSSMathInvert.prototype, "CSSMathInvert", "value_get", arguments);
  },
  set: undefined
});