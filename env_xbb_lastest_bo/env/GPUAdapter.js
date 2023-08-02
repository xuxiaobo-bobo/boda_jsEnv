// GPUAdapter对象

GPUAdapter = function GPUAdapter() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUAdapter)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUAdapter 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUAdapter, "GPUAdapter");
bodavm.toolsFunc.defineProperty(GPUAdapter.prototype, "features", {
  configurable: true,
  enumerable: true,
  get: function features() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapter.prototype, "GPUAdapter", "features_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUAdapter.prototype, "limits", {
  configurable: true,
  enumerable: true,
  get: function limits() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapter.prototype, "GPUAdapter", "limits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUAdapter.prototype, "isFallbackAdapter", {
  configurable: true,
  enumerable: true,
  get: function isFallbackAdapter() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapter.prototype, "GPUAdapter", "isFallbackAdapter_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUAdapter.prototype, "requestAdapterInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestAdapterInfo() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapter.prototype, "GPUAdapter", "requestAdapterInfo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUAdapter.prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestDevice() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapter.prototype, "GPUAdapter", "requestDevice", arguments);
  }
});