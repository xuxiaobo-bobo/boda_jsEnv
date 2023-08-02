// CSSVariableReferenceValue对象

CSSVariableReferenceValue = function CSSVariableReferenceValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSVariableReferenceValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSVariableReferenceValue': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSVariableReferenceValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSVariableReferenceValue, "CSSVariableReferenceValue");
bodavm.toolsFunc.defineProperty(CSSVariableReferenceValue.prototype, "variable", {
  configurable: true,
  enumerable: true,
  get: function variable() {
    return bodavm.toolsFunc.dispatch(this, CSSVariableReferenceValue.prototype, "CSSVariableReferenceValue", "variable_get", arguments);
  },
  set: function variable() {
    return bodavm.toolsFunc.dispatch(this, CSSVariableReferenceValue.prototype, "CSSVariableReferenceValue", "variable_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSVariableReferenceValue.prototype, "fallback", {
  configurable: true,
  enumerable: true,
  get: function fallback() {
    return bodavm.toolsFunc.dispatch(this, CSSVariableReferenceValue.prototype, "CSSVariableReferenceValue", "fallback_get", arguments);
  },
  set: undefined
});