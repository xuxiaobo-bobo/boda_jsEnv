// GPUAdapter对象

bodaEnv.memory.globlProtoObj["GPUAdapter"] = function GPUAdapter() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUAdapter 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUAdapter"], "GPUAdapter");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "features", {
  configurable: true,
  enumerable: true,
  get: {
    features() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "GPUAdapter", "features_get", arguments);
    }
  }.features,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "limits", {
  configurable: true,
  enumerable: true,
  get: {
    limits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "GPUAdapter", "limits_get", arguments);
    }
  }.limits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "isFallbackAdapter", {
  configurable: true,
  enumerable: true,
  get: {
    isFallbackAdapter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "GPUAdapter", "isFallbackAdapter_get", arguments);
    }
  }.isFallbackAdapter,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "requestAdapterInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestAdapterInfo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "GPUAdapter", "requestAdapterInfo", arguments);
    }
  }.requestAdapterInfo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestDevice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUAdapter"].prototype, "GPUAdapter", "requestDevice", arguments);
    }
  }.requestDevice
});