// CSSImageValue对象

bodaEnv.memory.globlProtoObj["CSSImageValue"] = function CSSImageValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSImageValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSImageValue"], "CSSImageValue");
bodaEnv.memory.globlProtoObj["CSSImageValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSImageValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"];