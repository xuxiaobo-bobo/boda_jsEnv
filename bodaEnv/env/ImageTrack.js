// ImageTrack对象

bodaEnv.memory.globlProtoObj["ImageTrack"] = function ImageTrack() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ImageTrack 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ImageTrack"], "ImageTrack");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "frameCount", {
  configurable: true,
  enumerable: true,
  get: {
    frameCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "ImageTrack", "frameCount_get", arguments);
    }
  }.frameCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "animated", {
  configurable: true,
  enumerable: true,
  get: {
    animated() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "ImageTrack", "animated_get", arguments);
    }
  }.animated,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "repetitionCount", {
  configurable: true,
  enumerable: true,
  get: {
    repetitionCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "ImageTrack", "repetitionCount_get", arguments);
    }
  }.repetitionCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "selected", {
  configurable: true,
  enumerable: true,
  get: {
    selected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "ImageTrack", "selected_get", arguments);
    }
  }.selected,
  set: {
    selected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrack"].prototype, "ImageTrack", "selected_set", arguments);
    }
  }.selected
});