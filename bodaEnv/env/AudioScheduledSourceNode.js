// AudioScheduledSourceNode对象

bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"] = function AudioScheduledSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioScheduledSourceNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"], "AudioScheduledSourceNode");
bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "AudioScheduledSourceNode", "onended_get", arguments);
    }
  }.onended,
  set: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "AudioScheduledSourceNode", "onended_set", arguments);
    }
  }.onended
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "AudioScheduledSourceNode", "start", arguments);
    }
  }.start
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype, "AudioScheduledSourceNode", "stop", arguments);
    }
  }.stop
});