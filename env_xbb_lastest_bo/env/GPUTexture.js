// GPUTexture对象

GPUTexture = function GPUTexture() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUTexture)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUTexture 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUTexture, "GPUTexture");
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "depthOrArrayLayers", {
  configurable: true,
  enumerable: true,
  get: function depthOrArrayLayers() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "depthOrArrayLayers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "mipLevelCount", {
  configurable: true,
  enumerable: true,
  get: function mipLevelCount() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "mipLevelCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "sampleCount", {
  configurable: true,
  enumerable: true,
  get: function sampleCount() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "sampleCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "dimension", {
  configurable: true,
  enumerable: true,
  get: function dimension() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "dimension_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "format", {
  configurable: true,
  enumerable: true,
  get: function format() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "format_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "usage", {
  configurable: true,
  enumerable: true,
  get: function usage() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "usage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "createView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createView() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "createView", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUTexture.prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function destroy() {
    return bodavm.toolsFunc.dispatch(this, GPUTexture.prototype, "GPUTexture", "destroy", arguments);
  }
});