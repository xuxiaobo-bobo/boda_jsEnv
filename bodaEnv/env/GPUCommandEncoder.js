// GPUCommandEncoder对象

bodaEnv.memory.globlProtoObj["GPUCommandEncoder"] = function GPUCommandEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUCommandEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"], "GPUCommandEncoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "beginComputePass", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginComputePass() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "beginComputePass", arguments);
    }
  }.beginComputePass
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "beginRenderPass", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginRenderPass() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "beginRenderPass", arguments);
    }
  }.beginRenderPass
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "copyBufferToTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyBufferToTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "copyBufferToTexture", arguments);
    }
  }.copyBufferToTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "copyTextureToBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTextureToBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "copyTextureToBuffer", arguments);
    }
  }.copyTextureToBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "copyTextureToTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTextureToTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "copyTextureToTexture", arguments);
    }
  }.copyTextureToTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    finish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "finish", arguments);
    }
  }.finish
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertDebugMarker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "insertDebugMarker", arguments);
    }
  }.insertDebugMarker
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pushDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "pushDebugGroup", arguments);
    }
  }.pushDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "clearBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "clearBuffer", arguments);
    }
  }.clearBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "copyBufferToBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyBufferToBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "copyBufferToBuffer", arguments);
    }
  }.copyBufferToBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    popDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "popDebugGroup", arguments);
    }
  }.popDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "resolveQuerySet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resolveQuerySet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "resolveQuerySet", arguments);
    }
  }.resolveQuerySet
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "writeTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeTimestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandEncoder"].prototype, "GPUCommandEncoder", "writeTimestamp", arguments);
    }
  }.writeTimestamp
});