// GPUBindGroupLayout对象

GPUBindGroupLayout = function GPUBindGroupLayout() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUBindGroupLayout)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUBindGroupLayout 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUBindGroupLayout, "GPUBindGroupLayout");
bodavm.toolsFunc.defineProperty(GPUBindGroupLayout.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUBindGroupLayout.prototype, "GPUBindGroupLayout", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUBindGroupLayout.prototype, "GPUBindGroupLayout", "label_set", arguments);
  }
});