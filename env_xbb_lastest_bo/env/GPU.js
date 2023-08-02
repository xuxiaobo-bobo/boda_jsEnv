// GPU对象

GPU = function GPU() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPU)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPU 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPU, "GPU");
bodavm.toolsFunc.defineProperty(GPU.prototype, "getPreferredCanvasFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPreferredCanvasFormat() {
    return bodavm.toolsFunc.dispatch(this, GPU.prototype, "GPU", "getPreferredCanvasFormat", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPU.prototype, "requestAdapter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestAdapter() {
    return bodavm.toolsFunc.dispatch(this, GPU.prototype, "GPU", "requestAdapter", arguments);
  }
});