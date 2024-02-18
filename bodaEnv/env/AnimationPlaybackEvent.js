// AnimationPlaybackEvent对象

bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"] = function AnimationPlaybackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AnimationPlaybackEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"], "AnimationPlaybackEvent");
bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"].prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"].prototype, "AnimationPlaybackEvent", "currentTime_get", arguments);
    }
  }.currentTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"].prototype, "timelineTime", {
  configurable: true,
  enumerable: true,
  get: {
    timelineTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationPlaybackEvent"].prototype, "AnimationPlaybackEvent", "timelineTime_get", arguments);
    }
  }.timelineTime,
  set: undefined
});