// GPUSupportedLimits对象

bodaEnv.memory.globlProtoObj["GPUSupportedLimits"] = function GPUSupportedLimits() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUSupportedLimits 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"], "GPUSupportedLimits");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxTextureDimension1D", {
  configurable: true,
  enumerable: true,
  get: {
    maxTextureDimension1D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxTextureDimension1D_get", arguments);
    }
  }.maxTextureDimension1D,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxTextureDimension2D", {
  configurable: true,
  enumerable: true,
  get: {
    maxTextureDimension2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxTextureDimension2D_get", arguments);
    }
  }.maxTextureDimension2D,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxTextureDimension3D", {
  configurable: true,
  enumerable: true,
  get: {
    maxTextureDimension3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxTextureDimension3D_get", arguments);
    }
  }.maxTextureDimension3D,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxTextureArrayLayers", {
  configurable: true,
  enumerable: true,
  get: {
    maxTextureArrayLayers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxTextureArrayLayers_get", arguments);
    }
  }.maxTextureArrayLayers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxBindGroups", {
  configurable: true,
  enumerable: true,
  get: {
    maxBindGroups() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxBindGroups_get", arguments);
    }
  }.maxBindGroups,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxBindingsPerBindGroup", {
  configurable: true,
  enumerable: true,
  get: {
    maxBindingsPerBindGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxBindingsPerBindGroup_get", arguments);
    }
  }.maxBindingsPerBindGroup,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxDynamicUniformBuffersPerPipelineLayout", {
  configurable: true,
  enumerable: true,
  get: {
    maxDynamicUniformBuffersPerPipelineLayout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxDynamicUniformBuffersPerPipelineLayout_get", arguments);
    }
  }.maxDynamicUniformBuffersPerPipelineLayout,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxDynamicStorageBuffersPerPipelineLayout", {
  configurable: true,
  enumerable: true,
  get: {
    maxDynamicStorageBuffersPerPipelineLayout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxDynamicStorageBuffersPerPipelineLayout_get", arguments);
    }
  }.maxDynamicStorageBuffersPerPipelineLayout,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxSampledTexturesPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: {
    maxSampledTexturesPerShaderStage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxSampledTexturesPerShaderStage_get", arguments);
    }
  }.maxSampledTexturesPerShaderStage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxSamplersPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: {
    maxSamplersPerShaderStage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxSamplersPerShaderStage_get", arguments);
    }
  }.maxSamplersPerShaderStage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxStorageBuffersPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: {
    maxStorageBuffersPerShaderStage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxStorageBuffersPerShaderStage_get", arguments);
    }
  }.maxStorageBuffersPerShaderStage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxStorageTexturesPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: {
    maxStorageTexturesPerShaderStage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxStorageTexturesPerShaderStage_get", arguments);
    }
  }.maxStorageTexturesPerShaderStage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxUniformBuffersPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: {
    maxUniformBuffersPerShaderStage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxUniformBuffersPerShaderStage_get", arguments);
    }
  }.maxUniformBuffersPerShaderStage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxUniformBufferBindingSize", {
  configurable: true,
  enumerable: true,
  get: {
    maxUniformBufferBindingSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxUniformBufferBindingSize_get", arguments);
    }
  }.maxUniformBufferBindingSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxStorageBufferBindingSize", {
  configurable: true,
  enumerable: true,
  get: {
    maxStorageBufferBindingSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxStorageBufferBindingSize_get", arguments);
    }
  }.maxStorageBufferBindingSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "minUniformBufferOffsetAlignment", {
  configurable: true,
  enumerable: true,
  get: {
    minUniformBufferOffsetAlignment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "minUniformBufferOffsetAlignment_get", arguments);
    }
  }.minUniformBufferOffsetAlignment,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "minStorageBufferOffsetAlignment", {
  configurable: true,
  enumerable: true,
  get: {
    minStorageBufferOffsetAlignment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "minStorageBufferOffsetAlignment_get", arguments);
    }
  }.minStorageBufferOffsetAlignment,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxVertexBuffers", {
  configurable: true,
  enumerable: true,
  get: {
    maxVertexBuffers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxVertexBuffers_get", arguments);
    }
  }.maxVertexBuffers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxBufferSize", {
  configurable: true,
  enumerable: true,
  get: {
    maxBufferSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxBufferSize_get", arguments);
    }
  }.maxBufferSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxVertexAttributes", {
  configurable: true,
  enumerable: true,
  get: {
    maxVertexAttributes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxVertexAttributes_get", arguments);
    }
  }.maxVertexAttributes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxVertexBufferArrayStride", {
  configurable: true,
  enumerable: true,
  get: {
    maxVertexBufferArrayStride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxVertexBufferArrayStride_get", arguments);
    }
  }.maxVertexBufferArrayStride,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxInterStageShaderComponents", {
  configurable: true,
  enumerable: true,
  get: {
    maxInterStageShaderComponents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxInterStageShaderComponents_get", arguments);
    }
  }.maxInterStageShaderComponents,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxInterStageShaderVariables", {
  configurable: true,
  enumerable: true,
  get: {
    maxInterStageShaderVariables() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxInterStageShaderVariables_get", arguments);
    }
  }.maxInterStageShaderVariables,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxColorAttachments", {
  configurable: true,
  enumerable: true,
  get: {
    maxColorAttachments() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxColorAttachments_get", arguments);
    }
  }.maxColorAttachments,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxColorAttachmentBytesPerSample", {
  configurable: true,
  enumerable: true,
  get: {
    maxColorAttachmentBytesPerSample() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxColorAttachmentBytesPerSample_get", arguments);
    }
  }.maxColorAttachmentBytesPerSample,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxComputeWorkgroupStorageSize", {
  configurable: true,
  enumerable: true,
  get: {
    maxComputeWorkgroupStorageSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxComputeWorkgroupStorageSize_get", arguments);
    }
  }.maxComputeWorkgroupStorageSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxComputeInvocationsPerWorkgroup", {
  configurable: true,
  enumerable: true,
  get: {
    maxComputeInvocationsPerWorkgroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxComputeInvocationsPerWorkgroup_get", arguments);
    }
  }.maxComputeInvocationsPerWorkgroup,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxComputeWorkgroupSizeX", {
  configurable: true,
  enumerable: true,
  get: {
    maxComputeWorkgroupSizeX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxComputeWorkgroupSizeX_get", arguments);
    }
  }.maxComputeWorkgroupSizeX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxComputeWorkgroupSizeY", {
  configurable: true,
  enumerable: true,
  get: {
    maxComputeWorkgroupSizeY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxComputeWorkgroupSizeY_get", arguments);
    }
  }.maxComputeWorkgroupSizeY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxComputeWorkgroupSizeZ", {
  configurable: true,
  enumerable: true,
  get: {
    maxComputeWorkgroupSizeZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxComputeWorkgroupSizeZ_get", arguments);
    }
  }.maxComputeWorkgroupSizeZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "maxComputeWorkgroupsPerDimension", {
  configurable: true,
  enumerable: true,
  get: {
    maxComputeWorkgroupsPerDimension() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSupportedLimits"].prototype, "GPUSupportedLimits", "maxComputeWorkgroupsPerDimension_get", arguments);
    }
  }.maxComputeWorkgroupsPerDimension,
  set: undefined
});