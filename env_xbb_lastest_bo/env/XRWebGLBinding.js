// XRWebGLBinding对象

XRWebGLBinding = function XRWebGLBinding() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRWebGLBinding)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRWebGLBinding': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRWebGLBinding 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRWebGLBinding, "XRWebGLBinding");
bodavm.toolsFunc.defineProperty(XRWebGLBinding.prototype, "getCameraImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCameraImage() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLBinding.prototype, "XRWebGLBinding", "getCameraImage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRWebGLBinding.prototype, "getDepthInformation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLBinding.prototype, "XRWebGLBinding", "getDepthInformation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRWebGLBinding.prototype, "getReflectionCubeMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getReflectionCubeMap() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLBinding.prototype, "XRWebGLBinding", "getReflectionCubeMap", arguments);
  }
});