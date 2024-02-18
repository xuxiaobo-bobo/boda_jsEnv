// GPUBuffer对象

bodaEnv.memory.globlProtoObj["GPUBuffer"] = function GPUBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUBuffer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUBuffer"], "GPUBuffer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "usage", {
  configurable: true,
  enumerable: true,
  get: {
    usage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "usage_get", arguments);
    }
  }.usage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "mapState", {
  configurable: true,
  enumerable: true,
  get: {
    mapState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "mapState_get", arguments);
    }
  }.mapState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    destroy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "destroy", arguments);
    }
  }.destroy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "getMappedRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getMappedRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "getMappedRange", arguments);
    }
  }.getMappedRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "mapAsync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    mapAsync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "mapAsync", arguments);
    }
  }.mapAsync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "unmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unmap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBuffer"].prototype, "GPUBuffer", "unmap", arguments);
    }
  }.unmap
});