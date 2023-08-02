// GPUQueue对象

GPUQueue = function GPUQueue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUQueue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUQueue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUQueue, "GPUQueue");
bodavm.toolsFunc.defineProperty(GPUQueue.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUQueue.prototype, "copyExternalImageToTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyExternalImageToTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "copyExternalImageToTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUQueue.prototype, "onSubmittedWorkDone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function onSubmittedWorkDone() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "onSubmittedWorkDone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUQueue.prototype, "submit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function submit() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "submit", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUQueue.prototype, "writeBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeBuffer() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "writeBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUQueue.prototype, "writeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUQueue.prototype, "GPUQueue", "writeTexture", arguments);
  }
});