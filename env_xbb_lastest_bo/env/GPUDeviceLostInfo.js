// GPUDeviceLostInfo对象

GPUDeviceLostInfo = function GPUDeviceLostInfo() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUDeviceLostInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUDeviceLostInfo 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUDeviceLostInfo, "GPUDeviceLostInfo");
bodavm.toolsFunc.defineProperty(GPUDeviceLostInfo.prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, GPUDeviceLostInfo.prototype, "GPUDeviceLostInfo", "reason_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUDeviceLostInfo.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, GPUDeviceLostInfo.prototype, "GPUDeviceLostInfo", "message_get", arguments);
  },
  set: undefined
});