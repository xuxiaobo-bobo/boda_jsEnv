// XRWebGLDepthInformation对象

bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"] = function XRWebGLDepthInformation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRWebGLDepthInformation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"], "XRWebGLDepthInformation");
bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype;
bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"].__proto__ = bodaEnv.memory.globlProtoObj["XRDepthInformation"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"].prototype, "texture", {
  configurable: true,
  enumerable: true,
  get: {
    texture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"].prototype, "XRWebGLDepthInformation", "texture_get", arguments);
    }
  }.texture,
  set: undefined
});