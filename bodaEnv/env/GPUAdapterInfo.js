// GPUAdapterInfo对象

bodaEnv.memory.globlProtoObj["GPUAdapterInfo"] = function GPUAdapterInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUAdapterInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUAdapterInfo"], "GPUAdapterInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "vendor", {
  configurable: true,
  enumerable: true,
  get: {
    vendor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "GPUAdapterInfo", "vendor_get", arguments);
    }
  }.vendor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "architecture", {
  configurable: true,
  enumerable: true,
  get: {
    architecture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "GPUAdapterInfo", "architecture_get", arguments);
    }
  }.architecture,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "device", {
  configurable: true,
  enumerable: true,
  get: {
    device() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "GPUAdapterInfo", "device_get", arguments);
    }
  }.device,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "description", {
  configurable: true,
  enumerable: true,
  get: {
    description() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapterInfo"].prototype, "GPUAdapterInfo", "description_get", arguments);
    }
  }.description,
  set: undefined
});