// VideoPlaybackQuality对象

bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"] = function VideoPlaybackQuality() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VideoPlaybackQuality 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"], "VideoPlaybackQuality");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "creationTime", {
  configurable: true,
  enumerable: true,
  get: {
    creationTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "VideoPlaybackQuality", "creationTime_get", arguments);
    }
  }.creationTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "totalVideoFrames", {
  configurable: true,
  enumerable: true,
  get: {
    totalVideoFrames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "VideoPlaybackQuality", "totalVideoFrames_get", arguments);
    }
  }.totalVideoFrames,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "droppedVideoFrames", {
  configurable: true,
  enumerable: true,
  get: {
    droppedVideoFrames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "VideoPlaybackQuality", "droppedVideoFrames_get", arguments);
    }
  }.droppedVideoFrames,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "corruptedVideoFrames", {
  configurable: true,
  enumerable: true,
  get: {
    corruptedVideoFrames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoPlaybackQuality"].prototype, "VideoPlaybackQuality", "corruptedVideoFrames_get", arguments);
    }
  }.corruptedVideoFrames,
  set: undefined
});