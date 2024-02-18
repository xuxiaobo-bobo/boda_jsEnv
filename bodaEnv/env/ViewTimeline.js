// ViewTimeline对象

bodaEnv.memory.globlProtoObj["ViewTimeline"] = function ViewTimeline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ViewTimeline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ViewTimeline"], "ViewTimeline");
bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["ScrollTimeline"].prototype;
bodaEnv.memory.globlProtoObj["ViewTimeline"].__proto__ = bodaEnv.memory.globlProtoObj["ScrollTimeline"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype, "subject", {
  configurable: true,
  enumerable: true,
  get: {
    subject() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype, "ViewTimeline", "subject_get", arguments);
    }
  }.subject,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype, "startOffset", {
  configurable: true,
  enumerable: true,
  get: {
    startOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype, "ViewTimeline", "startOffset_get", arguments);
    }
  }.startOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype, "endOffset", {
  configurable: true,
  enumerable: true,
  get: {
    endOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTimeline"].prototype, "ViewTimeline", "endOffset_get", arguments);
    }
  }.endOffset,
  set: undefined
});