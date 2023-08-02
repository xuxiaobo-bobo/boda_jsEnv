// GPUSupportedLimits对象

GPUSupportedLimits = function GPUSupportedLimits() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUSupportedLimits)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUSupportedLimits 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUSupportedLimits, "GPUSupportedLimits");
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxTextureDimension1D", {
  configurable: true,
  enumerable: true,
  get: function maxTextureDimension1D() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxTextureDimension1D_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxTextureDimension2D", {
  configurable: true,
  enumerable: true,
  get: function maxTextureDimension2D() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxTextureDimension2D_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxTextureDimension3D", {
  configurable: true,
  enumerable: true,
  get: function maxTextureDimension3D() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxTextureDimension3D_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxTextureArrayLayers", {
  configurable: true,
  enumerable: true,
  get: function maxTextureArrayLayers() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxTextureArrayLayers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxBindGroups", {
  configurable: true,
  enumerable: true,
  get: function maxBindGroups() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxBindGroups_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxBindingsPerBindGroup", {
  configurable: true,
  enumerable: true,
  get: function maxBindingsPerBindGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxBindingsPerBindGroup_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxDynamicUniformBuffersPerPipelineLayout", {
  configurable: true,
  enumerable: true,
  get: function maxDynamicUniformBuffersPerPipelineLayout() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxDynamicUniformBuffersPerPipelineLayout_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxDynamicStorageBuffersPerPipelineLayout", {
  configurable: true,
  enumerable: true,
  get: function maxDynamicStorageBuffersPerPipelineLayout() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxDynamicStorageBuffersPerPipelineLayout_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxSampledTexturesPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: function maxSampledTexturesPerShaderStage() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxSampledTexturesPerShaderStage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxSamplersPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: function maxSamplersPerShaderStage() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxSamplersPerShaderStage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxStorageBuffersPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: function maxStorageBuffersPerShaderStage() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxStorageBuffersPerShaderStage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxStorageTexturesPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: function maxStorageTexturesPerShaderStage() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxStorageTexturesPerShaderStage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxUniformBuffersPerShaderStage", {
  configurable: true,
  enumerable: true,
  get: function maxUniformBuffersPerShaderStage() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxUniformBuffersPerShaderStage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxUniformBufferBindingSize", {
  configurable: true,
  enumerable: true,
  get: function maxUniformBufferBindingSize() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxUniformBufferBindingSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxStorageBufferBindingSize", {
  configurable: true,
  enumerable: true,
  get: function maxStorageBufferBindingSize() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxStorageBufferBindingSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "minUniformBufferOffsetAlignment", {
  configurable: true,
  enumerable: true,
  get: function minUniformBufferOffsetAlignment() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "minUniformBufferOffsetAlignment_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "minStorageBufferOffsetAlignment", {
  configurable: true,
  enumerable: true,
  get: function minStorageBufferOffsetAlignment() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "minStorageBufferOffsetAlignment_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxVertexBuffers", {
  configurable: true,
  enumerable: true,
  get: function maxVertexBuffers() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxVertexBuffers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxBufferSize", {
  configurable: true,
  enumerable: true,
  get: function maxBufferSize() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxBufferSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxVertexAttributes", {
  configurable: true,
  enumerable: true,
  get: function maxVertexAttributes() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxVertexAttributes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxVertexBufferArrayStride", {
  configurable: true,
  enumerable: true,
  get: function maxVertexBufferArrayStride() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxVertexBufferArrayStride_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxInterStageShaderComponents", {
  configurable: true,
  enumerable: true,
  get: function maxInterStageShaderComponents() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxInterStageShaderComponents_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxInterStageShaderVariables", {
  configurable: true,
  enumerable: true,
  get: function maxInterStageShaderVariables() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxInterStageShaderVariables_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxColorAttachments", {
  configurable: true,
  enumerable: true,
  get: function maxColorAttachments() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxColorAttachments_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxColorAttachmentBytesPerSample", {
  configurable: true,
  enumerable: true,
  get: function maxColorAttachmentBytesPerSample() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxColorAttachmentBytesPerSample_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxComputeWorkgroupStorageSize", {
  configurable: true,
  enumerable: true,
  get: function maxComputeWorkgroupStorageSize() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxComputeWorkgroupStorageSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxComputeInvocationsPerWorkgroup", {
  configurable: true,
  enumerable: true,
  get: function maxComputeInvocationsPerWorkgroup() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxComputeInvocationsPerWorkgroup_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxComputeWorkgroupSizeX", {
  configurable: true,
  enumerable: true,
  get: function maxComputeWorkgroupSizeX() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxComputeWorkgroupSizeX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxComputeWorkgroupSizeY", {
  configurable: true,
  enumerable: true,
  get: function maxComputeWorkgroupSizeY() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxComputeWorkgroupSizeY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxComputeWorkgroupSizeZ", {
  configurable: true,
  enumerable: true,
  get: function maxComputeWorkgroupSizeZ() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxComputeWorkgroupSizeZ_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUSupportedLimits.prototype, "maxComputeWorkgroupsPerDimension", {
  configurable: true,
  enumerable: true,
  get: function maxComputeWorkgroupsPerDimension() {
    return bodavm.toolsFunc.dispatch(this, GPUSupportedLimits.prototype, "GPUSupportedLimits", "maxComputeWorkgroupsPerDimension_get", arguments);
  },
  set: undefined
});