// AudioContext对象

bodaEnv.memory.globlProtoObj["AudioContext"] = function AudioContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioContext"], "AudioContext");
bodaEnv.memory.globlProtoObj["AudioContext"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype;
bodaEnv.memory.globlProtoObj["AudioContext"].__proto__ = bodaEnv.memory.globlProtoObj["BaseAudioContext"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "baseLatency", {
  configurable: true,
  enumerable: true,
  get: {
    baseLatency() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "baseLatency_get", arguments);
    }
  }.baseLatency,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "outputLatency", {
  configurable: true,
  enumerable: true,
  get: {
    outputLatency() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "outputLatency_get", arguments);
    }
  }.outputLatency,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "createMediaElementSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createMediaElementSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "createMediaElementSource", arguments);
    }
  }.createMediaElementSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "createMediaStreamDestination", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createMediaStreamDestination() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "createMediaStreamDestination", arguments);
    }
  }.createMediaStreamDestination
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "createMediaStreamSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createMediaStreamSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "createMediaStreamSource", arguments);
    }
  }.createMediaStreamSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "getOutputTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getOutputTimestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "getOutputTimestamp", arguments);
    }
  }.getOutputTimestamp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "resume", arguments);
    }
  }.resume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "suspend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    suspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "suspend", arguments);
    }
  }.suspend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "sinkId", {
  configurable: true,
  enumerable: true,
  get: {
    sinkId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "sinkId_get", arguments);
    }
  }.sinkId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "onsinkchange", {
  configurable: true,
  enumerable: true,
  get: {
    onsinkchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "onsinkchange_get", arguments);
    }
  }.onsinkchange,
  set: {
    onsinkchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "onsinkchange_set", arguments);
    }
  }.onsinkchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "setSinkId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setSinkId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioContext"].prototype, "AudioContext", "setSinkId", arguments);
    }
  }.setSinkId
});