// CustomStateSet对象

CustomStateSet = function CustomStateSet() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CustomStateSet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CustomStateSet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CustomStateSet, "CustomStateSet");
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomStateSet.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, CustomStateSet.prototype, "CustomStateSet", "values", arguments);
  }
});