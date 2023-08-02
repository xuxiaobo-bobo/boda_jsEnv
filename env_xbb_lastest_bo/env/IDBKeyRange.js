// IDBKeyRange对象

IDBKeyRange = function IDBKeyRange() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBKeyRange)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBKeyRange 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBKeyRange, "IDBKeyRange");
bodavm.toolsFunc.defineProperty(IDBKeyRange, "bound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bound() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange, "IDBKeyRange", "bound", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBKeyRange, "lowerBound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lowerBound() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange, "IDBKeyRange", "lowerBound", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBKeyRange, "only", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function only() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange, "IDBKeyRange", "only", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBKeyRange, "upperBound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function upperBound() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange, "IDBKeyRange", "upperBound", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBKeyRange.prototype, "lower", {
  configurable: true,
  enumerable: true,
  get: function lower() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange.prototype, "IDBKeyRange", "lower_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBKeyRange.prototype, "upper", {
  configurable: true,
  enumerable: true,
  get: function upper() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange.prototype, "IDBKeyRange", "upper_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBKeyRange.prototype, "lowerOpen", {
  configurable: true,
  enumerable: true,
  get: function lowerOpen() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange.prototype, "IDBKeyRange", "lowerOpen_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBKeyRange.prototype, "upperOpen", {
  configurable: true,
  enumerable: true,
  get: function upperOpen() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange.prototype, "IDBKeyRange", "upperOpen_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBKeyRange.prototype, "includes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function includes() {
    return bodavm.toolsFunc.dispatch(this, IDBKeyRange.prototype, "IDBKeyRange", "includes", arguments);
  }
});