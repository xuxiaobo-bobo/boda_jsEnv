// XRLayer对象

bodaEnv.memory.globlProtoObj["XRLayer"] = function XRLayer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRLayer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRLayer"], "XRLayer");
bodaEnv.memory.globlProtoObj["XRLayer"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XRLayer"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];