// CSSUnparsedValue对象

CSSUnparsedValue = function CSSUnparsedValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSUnparsedValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSUnparsedValue': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSUnparsedValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSUnparsedValue, "CSSUnparsedValue");
CSSUnparsedValue.prototype.__proto__ = CSSStyleValue.prototype;
CSSUnparsedValue.__proto__ = CSSStyleValue;
bodavm.toolsFunc.defineProperty(CSSUnparsedValue.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, CSSUnparsedValue.prototype, "CSSUnparsedValue", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSUnparsedValue.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, CSSUnparsedValue.prototype, "CSSUnparsedValue", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSUnparsedValue.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSUnparsedValue.prototype, "CSSUnparsedValue", "values", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSUnparsedValue.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, CSSUnparsedValue.prototype, "CSSUnparsedValue", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSUnparsedValue.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSUnparsedValue.prototype, "CSSUnparsedValue", "length_get", arguments);
  },
  set: undefined
});