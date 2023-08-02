// GPUBuffer对象

GPUBuffer = function GPUBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUBuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUBuffer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUBuffer, "GPUBuffer");
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "usage", {
  configurable: true,
  enumerable: true,
  get: function usage() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "usage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "mapState", {
  configurable: true,
  enumerable: true,
  get: function mapState() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "mapState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function destroy() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "destroy", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "getMappedRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getMappedRange() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "getMappedRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "mapAsync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function mapAsync() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "mapAsync", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUBuffer.prototype, "unmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unmap() {
    return bodavm.toolsFunc.dispatch(this, GPUBuffer.prototype, "GPUBuffer", "unmap", arguments);
  }
});