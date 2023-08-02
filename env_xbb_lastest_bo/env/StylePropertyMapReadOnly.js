// StylePropertyMapReadOnly对象

StylePropertyMapReadOnly = function StylePropertyMapReadOnly() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StylePropertyMapReadOnly)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StylePropertyMapReadOnly 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StylePropertyMapReadOnly, "StylePropertyMapReadOnly");
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "getAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(StylePropertyMapReadOnly.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, StylePropertyMapReadOnly.prototype, "StylePropertyMapReadOnly", "values", arguments);
  }
});