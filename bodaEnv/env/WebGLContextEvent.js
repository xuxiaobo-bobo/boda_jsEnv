// WebGLContextEvent对象

bodaEnv.memory.globlProtoObj["WebGLContextEvent"] = function WebGLContextEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGLContextEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGLContextEvent"], "WebGLContextEvent");
bodaEnv.memory.globlProtoObj["WebGLContextEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["WebGLContextEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLContextEvent"].prototype, "statusMessage", {
  configurable: true,
  enumerable: true,
  get: {
    statusMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLContextEvent"].prototype, "WebGLContextEvent", "statusMessage_get", arguments);
    }
  }.statusMessage,
  set: undefined
});