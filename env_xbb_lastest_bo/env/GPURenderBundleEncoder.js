// GPURenderBundleEncoder对象

GPURenderBundleEncoder = function GPURenderBundleEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPURenderBundleEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPURenderBundleEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPURenderBundleEncoder, "GPURenderBundleEncoder");
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function finish() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "finish", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "insertDebugMarker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertDebugMarker() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "insertDebugMarker", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "pushDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pushDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "pushDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "setBindGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setBindGroup() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "setBindGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "setIndexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setIndexBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "setIndexBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "draw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function draw() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "draw", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "drawIndexed", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawIndexed() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "drawIndexed", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "drawIndexedIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawIndexedIndirect() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "drawIndexedIndirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "drawIndirect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawIndirect() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "drawIndirect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "popDebugGroup", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function popDebugGroup() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "popDebugGroup", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "setPipeline", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPipeline() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "setPipeline", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderBundleEncoder.prototype, "setVertexBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setVertexBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundleEncoder.prototype, "GPURenderBundleEncoder", "setVertexBuffer", arguments);
  }
});