// HTMLSpanElement对象

bodaEnv.memory.globlProtoObj["HTMLSpanElement"] = function HTMLSpanElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLSpanElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLSpanElement"], "HTMLSpanElement");
bodaEnv.memory.globlProtoObj["HTMLSpanElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLSpanElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];