// GPURenderPassEncoder对象

GPURenderPassEncoder = function GPURenderPassEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPURenderPassEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPURenderPassEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPURenderPassEncoder, "GPURenderPassEncoder");
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "executeBundles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function executeBundles() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "executeBundles", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertDebugMarker() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "insertDebugMarker", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pushDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "pushDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setBindGroup() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setBindGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setBlendConstant", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setBlendConstant() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setBlendConstant", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setIndexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setIndexBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setIndexBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "writeTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeTimestamp() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "writeTimestamp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "beginOcclusionQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginOcclusionQuery() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "beginOcclusionQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "draw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function draw() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "draw", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "drawIndexed", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawIndexed() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "drawIndexed", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "drawIndexedIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawIndexedIndirect() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "drawIndexedIndirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "drawIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawIndirect() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "drawIndirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function end() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "end", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "endOcclusionQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endOcclusionQuery() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "endOcclusionQuery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function popDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "popDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPipeline() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setPipeline", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setScissorRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setScissorRect() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setScissorRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setStencilReference", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStencilReference() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setStencilReference", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setVertexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setVertexBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setVertexBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPassEncoder.prototype, "setViewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setViewport() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPassEncoder.prototype, "GPURenderPassEncoder", "setViewport", arguments);
  }
});