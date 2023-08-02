// GPUComputePassEncoder对象

GPUComputePassEncoder = function GPUComputePassEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUComputePassEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUComputePassEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUComputePassEncoder, "GPUComputePassEncoder");
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertDebugMarker() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "insertDebugMarker", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pushDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "pushDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "setBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setBindGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "setBindGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "writeTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeTimestamp() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "writeTimestamp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "dispatchWorkgroups", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function dispatchWorkgroups() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "dispatchWorkgroups", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "dispatchWorkgroupsIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function dispatchWorkgroupsIndirect() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "dispatchWorkgroupsIndirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function end() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "end", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function popDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "popDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePassEncoder.prototype, "setPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPipeline() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePassEncoder.prototype, "GPUComputePassEncoder", "setPipeline", arguments);
  }
});