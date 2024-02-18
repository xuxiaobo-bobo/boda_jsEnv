// TextTrackCueList对象

bodaEnv.memory.globlProtoObj["TextTrackCueList"] = function TextTrackCueList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextTrackCueList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextTrackCueList"], "TextTrackCueList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCueList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCueList"].prototype, "TextTrackCueList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCueList"].prototype, "getCueById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCueById() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCueList"].prototype, "TextTrackCueList", "getCueById", arguments);
    }
  }.getCueById
});