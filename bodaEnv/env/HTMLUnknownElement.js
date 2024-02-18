// HTMLUnknownElement对象

bodaEnv.memory.globlProtoObj["HTMLUnknownElement"] = function HTMLUnknownElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLUnknownElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLUnknownElement"], "HTMLUnknownElement");
bodaEnv.memory.globlProtoObj["HTMLUnknownElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLUnknownElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];