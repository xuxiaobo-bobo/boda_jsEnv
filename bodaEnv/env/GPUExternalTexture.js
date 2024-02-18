// GPUExternalTexture对象

bodaEnv.memory.globlProtoObj["GPUExternalTexture"] = function GPUExternalTexture() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUExternalTexture 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUExternalTexture"], "GPUExternalTexture");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUExternalTexture"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUExternalTexture"].prototype, "GPUExternalTexture", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUExternalTexture"].prototype, "GPUExternalTexture", "label_set", arguments);
    }
  }.label
});