// GPUTexture对象

bodaEnv.memory.globlProtoObj["GPUTexture"] = function GPUTexture() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUTexture 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUTexture"], "GPUTexture");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "depthOrArrayLayers", {
  configurable: true,
  enumerable: true,
  get: {
    depthOrArrayLayers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "depthOrArrayLayers_get", arguments);
    }
  }.depthOrArrayLayers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "mipLevelCount", {
  configurable: true,
  enumerable: true,
  get: {
    mipLevelCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "mipLevelCount_get", arguments);
    }
  }.mipLevelCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "sampleCount", {
  configurable: true,
  enumerable: true,
  get: {
    sampleCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "sampleCount_get", arguments);
    }
  }.sampleCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "dimension", {
  configurable: true,
  enumerable: true,
  get: {
    dimension() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "dimension_get", arguments);
    }
  }.dimension,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "format", {
  configurable: true,
  enumerable: true,
  get: {
    format() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "format_get", arguments);
    }
  }.format,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "usage", {
  configurable: true,
  enumerable: true,
  get: {
    usage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "usage_get", arguments);
    }
  }.usage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "createView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createView() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "createView", arguments);
    }
  }.createView
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    destroy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUTexture"].prototype, "GPUTexture", "destroy", arguments);
    }
  }.destroy
});