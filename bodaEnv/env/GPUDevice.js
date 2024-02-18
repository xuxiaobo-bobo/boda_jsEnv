// GPUDevice对象

bodaEnv.memory.globlProtoObj["GPUDevice"] = function GPUDevice() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUDevice 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUDevice"], "GPUDevice");
bodaEnv.memory.globlProtoObj["GPUDevice"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["GPUDevice"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "features", {
  configurable: true,
  enumerable: true,
  get: {
    features() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "features_get", arguments);
    }
  }.features,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "limits", {
  configurable: true,
  enumerable: true,
  get: {
    limits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "limits_get", arguments);
    }
  }.limits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "lost", {
  configurable: true,
  enumerable: true,
  get: {
    lost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "lost_get", arguments);
    }
  }.lost,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "queue", {
  configurable: true,
  enumerable: true,
  get: {
    queue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "queue_get", arguments);
    }
  }.queue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "onuncapturederror", {
  configurable: true,
  enumerable: true,
  get: {
    onuncapturederror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "onuncapturederror_get", arguments);
    }
  }.onuncapturederror,
  set: {
    onuncapturederror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "onuncapturederror_set", arguments);
    }
  }.onuncapturederror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBindGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createBindGroup", arguments);
    }
  }.createBindGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createBindGroupLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBindGroupLayout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createBindGroupLayout", arguments);
    }
  }.createBindGroupLayout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createBuffer", arguments);
    }
  }.createBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createCommandEncoder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createCommandEncoder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createCommandEncoder", arguments);
    }
  }.createCommandEncoder
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createComputePipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createComputePipeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createComputePipeline", arguments);
    }
  }.createComputePipeline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createComputePipelineAsync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createComputePipelineAsync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createComputePipelineAsync", arguments);
    }
  }.createComputePipelineAsync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createPipelineLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createPipelineLayout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createPipelineLayout", arguments);
    }
  }.createPipelineLayout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createQuerySet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createQuerySet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createQuerySet", arguments);
    }
  }.createQuerySet
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createRenderBundleEncoder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRenderBundleEncoder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createRenderBundleEncoder", arguments);
    }
  }.createRenderBundleEncoder
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createRenderPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRenderPipeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createRenderPipeline", arguments);
    }
  }.createRenderPipeline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createRenderPipelineAsync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRenderPipelineAsync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createRenderPipelineAsync", arguments);
    }
  }.createRenderPipelineAsync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSampler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createSampler", arguments);
    }
  }.createSampler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createShaderModule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createShaderModule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createShaderModule", arguments);
    }
  }.createShaderModule
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "createTexture", arguments);
    }
  }.createTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    destroy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "destroy", arguments);
    }
  }.destroy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "importExternalTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    importExternalTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "importExternalTexture", arguments);
    }
  }.importExternalTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "popErrorScope", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    popErrorScope() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "popErrorScope", arguments);
    }
  }.popErrorScope
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "pushErrorScope", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pushErrorScope() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDevice"].prototype, "GPUDevice", "pushErrorScope", arguments);
    }
  }.pushErrorScope
});