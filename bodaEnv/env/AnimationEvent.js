// AnimationEvent对象

bodaEnv.memory.globlProtoObj["AnimationEvent"] = function AnimationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AnimationEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AnimationEvent"], "AnimationEvent");
bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["AnimationEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype, "animationName", {
  configurable: true,
  enumerable: true,
  get: {
    animationName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype, "AnimationEvent", "animationName_get", arguments);
    }
  }.animationName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype, "elapsedTime", {
  configurable: true,
  enumerable: true,
  get: {
    elapsedTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype, "AnimationEvent", "elapsedTime_get", arguments);
    }
  }.elapsedTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype, "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: {
    pseudoElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationEvent"].prototype, "AnimationEvent", "pseudoElement_get", arguments);
    }
  }.pseudoElement,
  set: undefined
});