// CompositionEvent对象

bodaEnv.memory.globlProtoObj["CompositionEvent"] = function CompositionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CompositionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CompositionEvent"], "CompositionEvent");
bodaEnv.memory.globlProtoObj["CompositionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"].prototype;
bodaEnv.memory.globlProtoObj["CompositionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CompositionEvent"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CompositionEvent"].prototype, "CompositionEvent", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CompositionEvent"].prototype, "initCompositionEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initCompositionEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CompositionEvent"].prototype, "CompositionEvent", "initCompositionEvent", arguments);
    }
  }.initCompositionEvent
});