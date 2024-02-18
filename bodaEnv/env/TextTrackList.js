// TextTrackList对象

bodaEnv.memory.globlProtoObj["TextTrackList"] = function TextTrackList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextTrackList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextTrackList"], "TextTrackList");
bodaEnv.memory.globlProtoObj["TextTrackList"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["TextTrackList"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "onaddtrack", {
  configurable: true,
  enumerable: true,
  get: {
    onaddtrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "onaddtrack_get", arguments);
    }
  }.onaddtrack,
  set: {
    onaddtrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "onaddtrack_set", arguments);
    }
  }.onaddtrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "onremovetrack", {
  configurable: true,
  enumerable: true,
  get: {
    onremovetrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "onremovetrack_get", arguments);
    }
  }.onremovetrack,
  set: {
    onremovetrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "onremovetrack_set", arguments);
    }
  }.onremovetrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "getTrackById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTrackById() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackList"].prototype, "TextTrackList", "getTrackById", arguments);
    }
  }.getTrackById
});