// KeyboardLayoutMap对象

KeyboardLayoutMap = function KeyboardLayoutMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof KeyboardLayoutMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('KeyboardLayoutMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(KeyboardLayoutMap, "KeyboardLayoutMap");
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyboardLayoutMap.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, KeyboardLayoutMap.prototype, "KeyboardLayoutMap", "values", arguments);
  }
});