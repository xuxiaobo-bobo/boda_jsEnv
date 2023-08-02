// CSSUnitValue对象

CSSUnitValue = function CSSUnitValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSUnitValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSUnitValue': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSUnitValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSUnitValue, "CSSUnitValue");
CSSUnitValue.prototype.__proto__ = CSSNumericValue.prototype;
CSSUnitValue.__proto__ = CSSNumericValue;
bodavm.toolsFunc.defineProperty(CSSUnitValue.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, CSSUnitValue.prototype, "CSSUnitValue", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, CSSUnitValue.prototype, "CSSUnitValue", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSUnitValue.prototype, "unit", {
  configurable: true,
  enumerable: true,
  get: function unit() {
    return bodavm.toolsFunc.dispatch(this, CSSUnitValue.prototype, "CSSUnitValue", "unit_get", arguments);
  },
  set: undefined
});