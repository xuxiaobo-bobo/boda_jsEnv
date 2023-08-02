// HighlightRegistry对象

HighlightRegistry = function HighlightRegistry() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HighlightRegistry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HighlightRegistry 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HighlightRegistry, "HighlightRegistry");
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HighlightRegistry.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, HighlightRegistry.prototype, "HighlightRegistry", "values", arguments);
  }
});