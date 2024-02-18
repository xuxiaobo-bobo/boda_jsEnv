// CDATASection对象

bodaEnv.memory.globlProtoObj["CDATASection"] = function CDATASection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CDATASection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CDATASection"], "CDATASection");
bodaEnv.memory.globlProtoObj["CDATASection"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Text"].prototype;
bodaEnv.memory.globlProtoObj["CDATASection"].__proto__ = bodaEnv.memory.globlProtoObj["Text"];