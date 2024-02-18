// GPURenderPassEncoder对象

bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"] = function GPURenderPassEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPURenderPassEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"], "GPURenderPassEncoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "executeBundles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    executeBundles() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "executeBundles", arguments);
    }
  }.executeBundles
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertDebugMarker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "insertDebugMarker", arguments);
    }
  }.insertDebugMarker
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pushDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "pushDebugGroup", arguments);
    }
  }.pushDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setBindGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setBindGroup", arguments);
    }
  }.setBindGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setBlendConstant", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setBlendConstant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setBlendConstant", arguments);
    }
  }.setBlendConstant
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setIndexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setIndexBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setIndexBuffer", arguments);
    }
  }.setIndexBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "writeTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeTimestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "writeTimestamp", arguments);
    }
  }.writeTimestamp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "beginOcclusionQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginOcclusionQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "beginOcclusionQuery", arguments);
    }
  }.beginOcclusionQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "draw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    draw() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "draw", arguments);
    }
  }.draw
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "drawIndexed", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawIndexed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "drawIndexed", arguments);
    }
  }.drawIndexed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "drawIndexedIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawIndexedIndirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "drawIndexedIndirect", arguments);
    }
  }.drawIndexedIndirect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "drawIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawIndirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "drawIndirect", arguments);
    }
  }.drawIndirect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    end() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "end", arguments);
    }
  }.end
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "endOcclusionQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    endOcclusionQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "endOcclusionQuery", arguments);
    }
  }.endOcclusionQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    popDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "popDebugGroup", arguments);
    }
  }.popDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPipeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setPipeline", arguments);
    }
  }.setPipeline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setScissorRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setScissorRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setScissorRect", arguments);
    }
  }.setScissorRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setStencilReference", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setStencilReference() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setStencilReference", arguments);
    }
  }.setStencilReference
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setVertexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setVertexBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setVertexBuffer", arguments);
    }
  }.setVertexBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "setViewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setViewport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPassEncoder"].prototype, "GPURenderPassEncoder", "setViewport", arguments);
    }
  }.setViewport
});