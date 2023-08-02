// MediaKeyStatusMap对象

MediaKeyStatusMap = function MediaKeyStatusMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaKeyStatusMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaKeyStatusMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaKeyStatusMap, "MediaKeyStatusMap");
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeyStatusMap.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyStatusMap.prototype, "MediaKeyStatusMap", "values", arguments);
  }
});