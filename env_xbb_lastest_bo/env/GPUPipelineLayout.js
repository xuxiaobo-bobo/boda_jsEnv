// GPUPipelineLayout对象

GPUPipelineLayout = function GPUPipelineLayout() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUPipelineLayout)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUPipelineLayout 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUPipelineLayout, "GPUPipelineLayout");
bodavm.toolsFunc.defineProperty(GPUPipelineLayout.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUPipelineLayout.prototype, "GPUPipelineLayout", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUPipelineLayout.prototype, "GPUPipelineLayout", "label_set", arguments);
  }
});