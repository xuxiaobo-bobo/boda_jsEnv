// VisibilityStateEntry对象

bodaEnv.memory.globlProtoObj["VisibilityStateEntry"] = function VisibilityStateEntry() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VisibilityStateEntry 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VisibilityStateEntry"], "VisibilityStateEntry");
bodaEnv.memory.globlProtoObj["VisibilityStateEntry"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["VisibilityStateEntry"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];