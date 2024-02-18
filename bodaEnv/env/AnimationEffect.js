// AnimationEffect对象

bodaEnv.memory.globlProtoObj["AnimationEffect"] = function AnimationEffect() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AnimationEffect 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AnimationEffect"], "AnimationEffect");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype, "getComputedTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getComputedTiming() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype, "AnimationEffect", "getComputedTiming", arguments);
    }
  }.getComputedTiming
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype, "getTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTiming() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype, "AnimationEffect", "getTiming", arguments);
    }
  }.getTiming
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype, "updateTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updateTiming() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnimationEffect"].prototype, "AnimationEffect", "updateTiming", arguments);
    }
  }.updateTiming
});