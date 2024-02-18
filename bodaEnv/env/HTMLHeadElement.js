// HTMLHeadElement对象

bodaEnv.memory.globlProtoObj["HTMLHeadElement"] = function HTMLHeadElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLHeadElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLHeadElement"], "HTMLHeadElement");
bodaEnv.memory.globlProtoObj["HTMLHeadElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLHeadElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];