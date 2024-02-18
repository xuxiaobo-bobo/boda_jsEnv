// GPUQueue对象

bodaEnv.memory.globlProtoObj["GPUQueue"] = function GPUQueue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUQueue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUQueue"], "GPUQueue");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "copyExternalImageToTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyExternalImageToTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "copyExternalImageToTexture", arguments);
    }
  }.copyExternalImageToTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "onSubmittedWorkDone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onSubmittedWorkDone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "onSubmittedWorkDone", arguments);
    }
  }.onSubmittedWorkDone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "submit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    submit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "submit", arguments);
    }
  }.submit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "writeBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "writeBuffer", arguments);
    }
  }.writeBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "writeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQueue"].prototype, "GPUQueue", "writeTexture", arguments);
    }
  }.writeTexture
});