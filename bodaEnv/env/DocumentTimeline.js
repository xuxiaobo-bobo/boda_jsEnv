// DocumentTimeline对象

bodaEnv.memory.globlProtoObj["DocumentTimeline"] = function DocumentTimeline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DocumentTimeline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DocumentTimeline"], "DocumentTimeline");
bodaEnv.memory.globlProtoObj["DocumentTimeline"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AnimationTimeline"].prototype;
bodaEnv.memory.globlProtoObj["DocumentTimeline"].__proto__ = bodaEnv.memory.globlProtoObj["AnimationTimeline"];