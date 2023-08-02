// GPUDevice对象

GPUDevice = function GPUDevice() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUDevice)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUDevice 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUDevice, "GPUDevice");
GPUDevice.prototype.__proto__ = EventTarget.prototype;
GPUDevice.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "features", {
  configurable: true,
  enumerable: true,
  get: function features() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "features_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "limits", {
  configurable: true,
  enumerable: true,
  get: function limits() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "limits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "lost", {
  configurable: true,
  enumerable: true,
  get: function lost() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "lost_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "queue", {
  configurable: true,
  enumerable: true,
  get: function queue() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "queue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "onuncapturederror", {
  configurable: true,
  enumerable: true,
  get: function onuncapturederror() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "onuncapturederror_get", arguments);
  },
  set: function onuncapturederror() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "onuncapturederror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBindGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createBindGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createBindGroupLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBindGroupLayout() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createBindGroupLayout", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createCommandEncoder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createCommandEncoder() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createCommandEncoder", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createComputePipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createComputePipeline() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createComputePipeline", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createComputePipelineAsync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createComputePipelineAsync() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createComputePipelineAsync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createPipelineLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPipelineLayout() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createPipelineLayout", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createQuerySet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createQuerySet() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createQuerySet", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createRenderBundleEncoder", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRenderBundleEncoder() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createRenderBundleEncoder", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createRenderPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRenderPipeline() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createRenderPipeline", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createRenderPipelineAsync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRenderPipelineAsync() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createRenderPipelineAsync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSampler() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createSampler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createShaderModule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createShaderModule() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createShaderModule", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "createTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function destroy() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "destroy", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "importExternalTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importExternalTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "importExternalTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "popErrorScope", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function popErrorScope() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "popErrorScope", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUDevice.prototype, "pushErrorScope", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pushErrorScope() {
    return bodavm.toolsFunc.dispatch(this, GPUDevice.prototype, "GPUDevice", "pushErrorScope", arguments);
  }
});