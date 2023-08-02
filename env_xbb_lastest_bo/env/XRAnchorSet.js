// XRAnchorSet对象

XRAnchorSet = function XRAnchorSet() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRAnchorSet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRAnchorSet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRAnchorSet, "XRAnchorSet");
bodavm.toolsFunc.defineProperty(XRAnchorSet.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, XRAnchorSet.prototype, "XRAnchorSet", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRAnchorSet.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, XRAnchorSet.prototype, "XRAnchorSet", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRAnchorSet.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, XRAnchorSet.prototype, "XRAnchorSet", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRAnchorSet.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, XRAnchorSet.prototype, "XRAnchorSet", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRAnchorSet.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, XRAnchorSet.prototype, "XRAnchorSet", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRAnchorSet.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, XRAnchorSet.prototype, "XRAnchorSet", "values", arguments);
  }
});