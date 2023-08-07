// URLSearchParams对象

URLSearchParams = function URLSearchParams() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('URLSearchParams 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(URLSearchParams, "URLSearchParams");
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "getAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "sort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sort() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "sort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "toString", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLSearchParams.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, URLSearchParams.prototype, "URLSearchParams", "values", arguments);
  }
});