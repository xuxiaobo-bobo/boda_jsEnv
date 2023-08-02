// GPUExternalTexture对象

GPUExternalTexture = function GPUExternalTexture() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUExternalTexture)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUExternalTexture 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUExternalTexture, "GPUExternalTexture");
bodavm.toolsFunc.defineProperty(GPUExternalTexture.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUExternalTexture.prototype, "GPUExternalTexture", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUExternalTexture.prototype, "GPUExternalTexture", "label_set", arguments);
  }
});