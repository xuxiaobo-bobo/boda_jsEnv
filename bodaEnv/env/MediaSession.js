// MediaSesboda对象

bodaEnv.memory.globlProtoObj["MediaSesboda"] = function MediaSesboda() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaSesboda 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaSesboda"], "MediaSesboda");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "metadata", {
  configurable: true,
  enumerable: true,
  get: {
    metadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "metadata_get", arguments);
    }
  }.metadata,
  set: {
    metadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "metadata_set", arguments);
    }
  }.metadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "playbackState", {
  configurable: true,
  enumerable: true,
  get: {
    playbackState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "playbackState_get", arguments);
    }
  }.playbackState,
  set: {
    playbackState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "playbackState_set", arguments);
    }
  }.playbackState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "setActionHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setActionHandler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "setActionHandler", arguments);
    }
  }.setActionHandler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "setCameraActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCameraActive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "setCameraActive", arguments);
    }
  }.setCameraActive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "setMicrophoneActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setMicrophoneActive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "setMicrophoneActive", arguments);
    }
  }.setMicrophoneActive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "setPositionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPositionState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSesboda"].prototype, "MediaSesboda", "setPositionState", arguments);
    }
  }.setPositionState
});