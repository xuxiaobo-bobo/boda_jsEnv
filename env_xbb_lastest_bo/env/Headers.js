// Headers对象

Headers = function Headers() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Headers 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Headers, "Headers");
bodavm.toolsFunc.defineProperty(Headers.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "getSetCookie", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSetCookie() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "getSetCookie", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Headers.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, Headers.prototype, "Headers", "values", arguments);
  }
});