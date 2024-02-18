// MediaSource对象

bodaEnv.memory.globlProtoObj["MediaSource"] = function MediaSource() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaSource 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaSource"], "MediaSource");
bodaEnv.memory.globlProtoObj["MediaSource"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaSource"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"], "canConstructInDedicatedWorker", {
  configurable: true,
  enumerable: true,
  get: {
    canConstructInDedicatedWorker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"], "MediaSource", "canConstructInDedicatedWorker_get", arguments, true);
    }
  }.canConstructInDedicatedWorker,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"], "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isTypeSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"], "MediaSource", "isTypeSupported", arguments);
    }
  }.isTypeSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "sourceBuffers", {
  configurable: true,
  enumerable: true,
  get: {
    sourceBuffers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "sourceBuffers_get", arguments);
    }
  }.sourceBuffers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "activeSourceBuffers", {
  configurable: true,
  enumerable: true,
  get: {
    activeSourceBuffers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "activeSourceBuffers_get", arguments);
    }
  }.activeSourceBuffers,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "duration_get", arguments);
    }
  }.duration,
  set: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "duration_set", arguments);
    }
  }.duration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "onsourceopen", {
  configurable: true,
  enumerable: true,
  get: {
    onsourceopen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "onsourceopen_get", arguments);
    }
  }.onsourceopen,
  set: {
    onsourceopen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "onsourceopen_set", arguments);
    }
  }.onsourceopen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "onsourceended", {
  configurable: true,
  enumerable: true,
  get: {
    onsourceended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "onsourceended_get", arguments);
    }
  }.onsourceended,
  set: {
    onsourceended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "onsourceended_set", arguments);
    }
  }.onsourceended
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "onsourceclose", {
  configurable: true,
  enumerable: true,
  get: {
    onsourceclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "onsourceclose_get", arguments);
    }
  }.onsourceclose,
  set: {
    onsourceclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "onsourceclose_set", arguments);
    }
  }.onsourceclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "addSourceBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addSourceBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "addSourceBuffer", arguments);
    }
  }.addSourceBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "clearLiveSeekableRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearLiveSeekableRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "clearLiveSeekableRange", arguments);
    }
  }.clearLiveSeekableRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "endOfStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    endOfStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "endOfStream", arguments);
    }
  }.endOfStream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "removeSourceBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeSourceBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "removeSourceBuffer", arguments);
    }
  }.removeSourceBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "setLiveSeekableRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setLiveSeekableRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaSource"].prototype, "MediaSource", "setLiveSeekableRange", arguments);
    }
  }.setLiveSeekableRange
});