// AnimationTimeline对象

bodaEnv.memory.globlProtoObj["AnimationTimeline"] = function AnimationTimeline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AnimationTimeline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AnimationTimeline"], "AnimationTimeline");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationTimeline"].prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationTimeline"].prototype, "AnimationTimeline", "currentTime_get", arguments);
    }
  }.currentTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationTimeline"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationTimeline"].prototype, "AnimationTimeline", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});