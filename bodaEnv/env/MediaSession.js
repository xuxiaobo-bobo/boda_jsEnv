// MediaSession对象

bodaEnv.memory.globlProtoObj["MediaSession"] = function MediaSession() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaSession 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaSession"], "MediaSession");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "metadata", {
  configurable: true,
  enumerable: true,
  get: {
    metadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "metadata_get", arguments);
    }
  }.metadata,
  set: {
    metadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "metadata_set", arguments);
    }
  }.metadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "playbackState", {
  configurable: true,
  enumerable: true,
  get: {
    playbackState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "playbackState_get", arguments);
    }
  }.playbackState,
  set: {
    playbackState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "playbackState_set", arguments);
    }
  }.playbackState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "setActionHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setActionHandler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "setActionHandler", arguments);
    }
  }.setActionHandler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "setCameraActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCameraActive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "setCameraActive", arguments);
    }
  }.setCameraActive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "setMicrophoneActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setMicrophoneActive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "setMicrophoneActive", arguments);
    }
  }.setMicrophoneActive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "setPositionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPositionState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSession"].prototype, "MediaSession", "setPositionState", arguments);
    }
  }.setPositionState
});