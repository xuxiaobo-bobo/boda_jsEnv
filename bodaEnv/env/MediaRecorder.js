// MediaRecorder对象

bodaEnv.memory.globlProtoObj["MediaRecorder"] = function MediaRecorder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaRecorder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaRecorder"], "MediaRecorder");
bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaRecorder"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"], "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isTypeSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"], "MediaRecorder", "isTypeSupported", arguments);
    }
  }.isTypeSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "stream", {
  configurable: true,
  enumerable: true,
  get: {
    stream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "stream_get", arguments);
    }
  }.stream,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "mimeType", {
  configurable: true,
  enumerable: true,
  get: {
    mimeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "mimeType_get", arguments);
    }
  }.mimeType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "onstart", {
  configurable: true,
  enumerable: true,
  get: {
    onstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onstart_get", arguments);
    }
  }.onstart,
  set: {
    onstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onstart_set", arguments);
    }
  }.onstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "onstop", {
  configurable: true,
  enumerable: true,
  get: {
    onstop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onstop_get", arguments);
    }
  }.onstop,
  set: {
    onstop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onstop_set", arguments);
    }
  }.onstop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "ondataavailable", {
  configurable: true,
  enumerable: true,
  get: {
    ondataavailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "ondataavailable_get", arguments);
    }
  }.ondataavailable,
  set: {
    ondataavailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "ondataavailable_set", arguments);
    }
  }.ondataavailable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onpause_get", arguments);
    }
  }.onpause,
  set: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onpause_set", arguments);
    }
  }.onpause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "onresume", {
  configurable: true,
  enumerable: true,
  get: {
    onresume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onresume_get", arguments);
    }
  }.onresume,
  set: {
    onresume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onresume_set", arguments);
    }
  }.onresume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "videoBitsPerSecond", {
  configurable: true,
  enumerable: true,
  get: {
    videoBitsPerSecond() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "videoBitsPerSecond_get", arguments);
    }
  }.videoBitsPerSecond,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "audioBitsPerSecond", {
  configurable: true,
  enumerable: true,
  get: {
    audioBitsPerSecond() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "audioBitsPerSecond_get", arguments);
    }
  }.audioBitsPerSecond,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "audioBitrateMode", {
  configurable: true,
  enumerable: true,
  get: {
    audioBitrateMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "audioBitrateMode_get", arguments);
    }
  }.audioBitrateMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "pause", arguments);
    }
  }.pause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "requestData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "requestData", arguments);
    }
  }.requestData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "resume", arguments);
    }
  }.resume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "start", arguments);
    }
  }.start
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaRecorder"].prototype, "MediaRecorder", "stop", arguments);
    }
  }.stop
});