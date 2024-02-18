// XRWebGLBinding对象

bodaEnv.memory.globlProtoObj["XRWebGLBinding"] = function XRWebGLBinding() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRWebGLBinding 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRWebGLBinding"], "XRWebGLBinding");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLBinding"].prototype, "getCameraImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCameraImage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLBinding"].prototype, "XRWebGLBinding", "getCameraImage", arguments);
    }
  }.getCameraImage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLBinding"].prototype, "getDepthInformation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDepthInformation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLBinding"].prototype, "XRWebGLBinding", "getDepthInformation", arguments);
    }
  }.getDepthInformation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLBinding"].prototype, "getReflectionCubeMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getReflectionCubeMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLBinding"].prototype, "XRWebGLBinding", "getReflectionCubeMap", arguments);
    }
  }.getReflectionCubeMap
});