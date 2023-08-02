// XRInputSourceArray对象

XRInputSourceArray = function XRInputSourceArray() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRInputSourceArray)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRInputSourceArray 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRInputSourceArray, "XRInputSourceArray");
bodavm.toolsFunc.defineProperty(XRInputSourceArray.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceArray.prototype, "XRInputSourceArray", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRInputSourceArray.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceArray.prototype, "XRInputSourceArray", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRInputSourceArray.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceArray.prototype, "XRInputSourceArray", "values", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRInputSourceArray.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceArray.prototype, "XRInputSourceArray", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRInputSourceArray.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceArray.prototype, "XRInputSourceArray", "length_get", arguments);
  },
  set: undefined
});