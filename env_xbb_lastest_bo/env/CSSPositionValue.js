// CSSPositionValue对象

CSSPositionValue = function CSSPositionValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSPositionValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSPositionValue': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSPositionValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSPositionValue, "CSSPositionValue");
CSSPositionValue.prototype.__proto__ = CSSStyleValue.prototype;
CSSPositionValue.__proto__ = CSSStyleValue;
bodavm.toolsFunc.defineProperty(CSSPositionValue.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSPositionValue.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "y_set", arguments);
  }
});