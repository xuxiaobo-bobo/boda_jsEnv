// GPUComputePassEncoder对象

bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"] = function GPUComputePassEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUComputePassEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"], "GPUComputePassEncoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertDebugMarker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "insertDebugMarker", arguments);
    }
  }.insertDebugMarker
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pushDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "pushDebugGroup", arguments);
    }
  }.pushDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "setBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setBindGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "setBindGroup", arguments);
    }
  }.setBindGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "writeTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeTimestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "writeTimestamp", arguments);
    }
  }.writeTimestamp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "dispatchWorkgroups", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    dispatchWorkgroups() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "dispatchWorkgroups", arguments);
    }
  }.dispatchWorkgroups
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "dispatchWorkgroupsIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    dispatchWorkgroupsIndirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "dispatchWorkgroupsIndirect", arguments);
    }
  }.dispatchWorkgroupsIndirect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    end() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "end", arguments);
    }
  }.end
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    popDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "popDebugGroup", arguments);
    }
  }.popDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "setPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPipeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePassEncoder"].prototype, "GPUComputePassEncoder", "setPipeline", arguments);
    }
  }.setPipeline
});