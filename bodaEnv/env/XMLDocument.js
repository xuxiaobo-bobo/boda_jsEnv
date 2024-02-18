// XMLDocument对象

bodaEnv.memory.globlProtoObj["XMLDocument"] = function XMLDocument() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XMLDocument 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XMLDocument"], "XMLDocument");
bodaEnv.memory.globlProtoObj["XMLDocument"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Document"].prototype;
bodaEnv.memory.globlProtoObj["XMLDocument"].__proto__ = bodaEnv.memory.globlProtoObj["Document"];