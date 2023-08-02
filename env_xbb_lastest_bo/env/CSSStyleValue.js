// CSSStyleValue对象

CSSStyleValue = function CSSStyleValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSStyleValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSStyleValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSStyleValue, "CSSStyleValue");
bodavm.toolsFunc.defineProperty(CSSStyleValue, "parse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parse() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleValue, "CSSStyleValue", "parse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleValue, "parseAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parseAll() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleValue, "CSSStyleValue", "parseAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleValue.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleValue.prototype, "CSSStyleValue", "toString", arguments);
  }
});