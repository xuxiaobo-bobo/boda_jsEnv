// ScrollTimeline对象

bodaEnv.memory.globlProtoObj["ScrollTimeline"] = function ScrollTimeline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ScrollTimeline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ScrollTimeline"], "ScrollTimeline");
bodaEnv.memory.globlProtoObj["ScrollTimeline"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AnimationTimeline"].prototype;
bodaEnv.memory.globlProtoObj["ScrollTimeline"].__proto__ = bodaEnv.memory.globlProtoObj["AnimationTimeline"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScrollTimeline"].prototype, "source", {
  configurable: true,
  enumerable: true,
  get: {
    source() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScrollTimeline"].prototype, "ScrollTimeline", "source_get", arguments);
    }
  }.source,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScrollTimeline"].prototype, "axis", {
  configurable: true,
  enumerable: true,
  get: {
    axis() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScrollTimeline"].prototype, "ScrollTimeline", "axis_get", arguments);
    }
  }.axis,
  set: undefined
});