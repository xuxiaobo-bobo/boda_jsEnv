// ImageTrackList对象

bodaEnv.memory.globlProtoObj["ImageTrackList"] = function ImageTrackList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ImageTrackList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ImageTrackList"], "ImageTrackList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "ImageTrackList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: {
    selectedIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "ImageTrackList", "selectedIndex_get", arguments);
    }
  }.selectedIndex,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "selectedTrack", {
  configurable: true,
  enumerable: true,
  get: {
    selectedTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "ImageTrackList", "selectedTrack_get", arguments);
    }
  }.selectedTrack,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: {
    ready() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageTrackList"].prototype, "ImageTrackList", "ready_get", arguments);
    }
  }.ready,
  set: undefined
});