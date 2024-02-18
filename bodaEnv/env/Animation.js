// Animation对象

bodaEnv.memory.globlProtoObj["Animation"] = function Animation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Animation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Animation"], "Animation");
bodaEnv.memory.globlProtoObj["Animation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Animation"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "effect", {
  configurable: true,
  enumerable: true,
  get: {
    effect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "effect_get", arguments);
    }
  }.effect,
  set: {
    effect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "effect_set", arguments);
    }
  }.effect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "startTime", {
  configurable: true,
  enumerable: true,
  get: {
    startTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "startTime_get", arguments);
    }
  }.startTime,
  set: {
    startTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "startTime_set", arguments);
    }
  }.startTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "currentTime_get", arguments);
    }
  }.currentTime,
  set: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "currentTime_set", arguments);
    }
  }.currentTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "playbackRate", {
  configurable: true,
  enumerable: true,
  get: {
    playbackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "playbackRate_get", arguments);
    }
  }.playbackRate,
  set: {
    playbackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "playbackRate_set", arguments);
    }
  }.playbackRate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "playState", {
  configurable: true,
  enumerable: true,
  get: {
    playState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "playState_get", arguments);
    }
  }.playState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "pending", {
  configurable: true,
  enumerable: true,
  get: {
    pending() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "pending_get", arguments);
    }
  }.pending,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "id_get", arguments);
    }
  }.id,
  set: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "id_set", arguments);
    }
  }.id
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "onfinish", {
  configurable: true,
  enumerable: true,
  get: {
    onfinish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "onfinish_get", arguments);
    }
  }.onfinish,
  set: {
    onfinish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "onfinish_set", arguments);
    }
  }.onfinish
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "oncancel_get", arguments);
    }
  }.oncancel,
  set: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "oncancel_set", arguments);
    }
  }.oncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "cancel", arguments);
    }
  }.cancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    finish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "finish", arguments);
    }
  }.finish
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "pause", arguments);
    }
  }.pause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "play", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    play() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "play", arguments);
    }
  }.play
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "reverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reverse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "reverse", arguments);
    }
  }.reverse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "updatePlaybackRate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updatePlaybackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "updatePlaybackRate", arguments);
    }
  }.updatePlaybackRate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "timeline", {
  configurable: true,
  enumerable: true,
  get: {
    timeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "timeline_get", arguments);
    }
  }.timeline,
  set: {
    timeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "timeline_set", arguments);
    }
  }.timeline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "replaceState", {
  configurable: true,
  enumerable: true,
  get: {
    replaceState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "replaceState_get", arguments);
    }
  }.replaceState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "onremove", {
  configurable: true,
  enumerable: true,
  get: {
    onremove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "onremove_get", arguments);
    }
  }.onremove,
  set: {
    onremove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "onremove_set", arguments);
    }
  }.onremove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "finished", {
  configurable: true,
  enumerable: true,
  get: {
    finished() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "finished_get", arguments);
    }
  }.finished,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: {
    ready() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "ready_get", arguments);
    }
  }.ready,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "rangeStart", {
  configurable: true,
  enumerable: true,
  get: {
    rangeStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "rangeStart_get", arguments);
    }
  }.rangeStart,
  set: {
    rangeStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "rangeStart_set", arguments);
    }
  }.rangeStart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "rangeEnd", {
  configurable: true,
  enumerable: true,
  get: {
    rangeEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "rangeEnd_get", arguments);
    }
  }.rangeEnd,
  set: {
    rangeEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "rangeEnd_set", arguments);
    }
  }.rangeEnd
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "commitStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    commitStyles() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "commitStyles", arguments);
    }
  }.commitStyles
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Animation"].prototype, "persist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    persist() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Animation"].prototype, "Animation", "persist", arguments);
    }
  }.persist
});