// CSSNumericArray对象

CSSNumericArray = function CSSNumericArray() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSNumericArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSNumericArray 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSNumericArray, "CSSNumericArray");
bodavm.toolsFunc.defineProperty(CSSNumericArray.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericArray.prototype, "CSSNumericArray", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericArray.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericArray.prototype, "CSSNumericArray", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericArray.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericArray.prototype, "CSSNumericArray", "values", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericArray.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericArray.prototype, "CSSNumericArray", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericArray.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericArray.prototype, "CSSNumericArray", "length_get", arguments);
  },
  set: undefined
});