// GPUAdapterInfo对象

GPUAdapterInfo = function GPUAdapterInfo() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUAdapterInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUAdapterInfo 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUAdapterInfo, "GPUAdapterInfo");
bodavm.toolsFunc.defineProperty(GPUAdapterInfo.prototype, "vendor", {
  configurable: true,
  enumerable: true,
  get: function vendor() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapterInfo.prototype, "GPUAdapterInfo", "vendor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUAdapterInfo.prototype, "architecture", {
  configurable: true,
  enumerable: true,
  get: function architecture() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapterInfo.prototype, "GPUAdapterInfo", "architecture_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUAdapterInfo.prototype, "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapterInfo.prototype, "GPUAdapterInfo", "device_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUAdapterInfo.prototype, "description", {
  configurable: true,
  enumerable: true,
  get: function description() {
    return bodavm.toolsFunc.dispatch(this, GPUAdapterInfo.prototype, "GPUAdapterInfo", "description_get", arguments);
  },
  set: undefined
});