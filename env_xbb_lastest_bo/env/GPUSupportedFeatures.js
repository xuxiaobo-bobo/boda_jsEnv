// GPUSupportedFeatures对象

GPUSupportedFeatures = function GPUSupportedFeatures() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUSupportedFeatures)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUSupportedFeatures 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUSupportedFeatures, "GPUSupportedFeatures");
bodavm.toolsFunc.defineProperty(GPUSupportedFeatures.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedFeatures.prototype, "GPUSupportedFeatures", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedFeatures.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedFeatures.prototype, "GPUSupportedFeatures", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUSupportedFeatures.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedFeatures.prototype, "GPUSupportedFeatures", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUSupportedFeatures.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedFeatures.prototype, "GPUSupportedFeatures", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUSupportedFeatures.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedFeatures.prototype, "GPUSupportedFeatures", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUSupportedFeatures.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedFeatures.prototype, "GPUSupportedFeatures", "values", arguments);
  }
});