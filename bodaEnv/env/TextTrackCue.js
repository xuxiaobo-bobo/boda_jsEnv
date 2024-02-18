// TextTrackCue对象

bodaEnv.memory.globlProtoObj["TextTrackCue"] = function TextTrackCue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextTrackCue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextTrackCue"], "TextTrackCue");
bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["TextTrackCue"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "track", {
  configurable: true,
  enumerable: true,
  get: {
    track() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "track_get", arguments);
    }
  }.track,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "id_get", arguments);
    }
  }.id,
  set: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "id_set", arguments);
    }
  }.id
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "startTime", {
  configurable: true,
  enumerable: true,
  get: {
    startTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "startTime_get", arguments);
    }
  }.startTime,
  set: {
    startTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "startTime_set", arguments);
    }
  }.startTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "endTime", {
  configurable: true,
  enumerable: true,
  get: {
    endTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "endTime_get", arguments);
    }
  }.endTime,
  set: {
    endTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "endTime_set", arguments);
    }
  }.endTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "pauseOnExit", {
  configurable: true,
  enumerable: true,
  get: {
    pauseOnExit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "pauseOnExit_get", arguments);
    }
  }.pauseOnExit,
  set: {
    pauseOnExit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "pauseOnExit_set", arguments);
    }
  }.pauseOnExit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "onenter", {
  configurable: true,
  enumerable: true,
  get: {
    onenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "onenter_get", arguments);
    }
  }.onenter,
  set: {
    onenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "onenter_set", arguments);
    }
  }.onenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "onexit", {
  configurable: true,
  enumerable: true,
  get: {
    onexit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "onexit_get", arguments);
    }
  }.onexit,
  set: {
    onexit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype, "TextTrackCue", "onexit_set", arguments);
    }
  }.onexit
});