// XRSpace对象

bodaEnv.memory.globlProtoObj["XRSpace"] = function XRSpace() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRSpace 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRSpace"], "XRSpace");
bodaEnv.memory.globlProtoObj["XRSpace"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XRSpace"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];