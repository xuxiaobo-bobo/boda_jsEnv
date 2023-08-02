// GPUBindGroup对象

GPUBindGroup = function GPUBindGroup() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUBindGroup)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUBindGroup 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUBindGroup, "GPUBindGroup");
bodavm.toolsFunc.defineProperty(GPUBindGroup.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUBindGroup.prototype, "GPUBindGroup", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUBindGroup.prototype, "GPUBindGroup", "label_set", arguments);
  }
});