// WebGLFramebuffer对象

bodaEnv.memory.globlProtoObj["WebGLFramebuffer"] = function WebGLFramebuffer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGLFramebuffer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGLFramebuffer"], "WebGLFramebuffer");