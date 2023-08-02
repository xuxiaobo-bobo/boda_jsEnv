// GPUCommandEncoder对象

GPUCommandEncoder = function GPUCommandEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUCommandEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUCommandEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUCommandEncoder, "GPUCommandEncoder");
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "beginComputePass", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginComputePass() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "beginComputePass", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "beginRenderPass", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginRenderPass() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "beginRenderPass", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "copyBufferToTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyBufferToTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "copyBufferToTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "copyTextureToBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTextureToBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "copyTextureToBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "copyTextureToTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTextureToTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "copyTextureToTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "finish", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertDebugMarker() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "insertDebugMarker", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pushDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "pushDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "clearBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "clearBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "copyBufferToBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyBufferToBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "copyBufferToBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function popDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "popDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "resolveQuerySet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resolveQuerySet() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "resolveQuerySet", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCommandEncoder.prototype, "writeTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeTimestamp() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandEncoder.prototype, "GPUCommandEncoder", "writeTimestamp", arguments);
  }
});