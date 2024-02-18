// GPURenderBundleEncoder对象

bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"] = function GPURenderBundleEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPURenderBundleEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"], "GPURenderBundleEncoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    finish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "finish", arguments);
    }
  }.finish
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertDebugMarker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "insertDebugMarker", arguments);
    }
  }.insertDebugMarker
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pushDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "pushDebugGroup", arguments);
    }
  }.pushDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "setBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setBindGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "setBindGroup", arguments);
    }
  }.setBindGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "setIndexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setIndexBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "setIndexBuffer", arguments);
    }
  }.setIndexBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "draw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    draw() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "draw", arguments);
    }
  }.draw
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "drawIndexed", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawIndexed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "drawIndexed", arguments);
    }
  }.drawIndexed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "drawIndexedIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawIndexedIndirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "drawIndexedIndirect", arguments);
    }
  }.drawIndexedIndirect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "drawIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawIndirect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "drawIndirect", arguments);
    }
  }.drawIndirect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    popDebugGroup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "popDebugGroup", arguments);
    }
  }.popDebugGroup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "setPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPipeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "setPipeline", arguments);
    }
  }.setPipeline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "setVertexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setVertexBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundleEncoder"].prototype, "GPURenderBundleEncoder", "setVertexBuffer", arguments);
    }
  }.setVertexBuffer
});