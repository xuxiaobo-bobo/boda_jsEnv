// SourceBuffer对象

bodaEnv.memory.globlProtoObj["SourceBuffer"] = function SourceBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SourceBuffer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SourceBuffer"], "SourceBuffer");
bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["SourceBuffer"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "mode_get", arguments);
    }
  }.mode,
  set: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "mode_set", arguments);
    }
  }.mode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "updating", {
  configurable: true,
  enumerable: true,
  get: {
    updating() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "updating_get", arguments);
    }
  }.updating,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "buffered", {
  configurable: true,
  enumerable: true,
  get: {
    buffered() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "buffered_get", arguments);
    }
  }.buffered,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "timestampOffset", {
  configurable: true,
  enumerable: true,
  get: {
    timestampOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "timestampOffset_get", arguments);
    }
  }.timestampOffset,
  set: {
    timestampOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "timestampOffset_set", arguments);
    }
  }.timestampOffset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "appendWindowStart", {
  configurable: true,
  enumerable: true,
  get: {
    appendWindowStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "appendWindowStart_get", arguments);
    }
  }.appendWindowStart,
  set: {
    appendWindowStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "appendWindowStart_set", arguments);
    }
  }.appendWindowStart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "appendWindowEnd", {
  configurable: true,
  enumerable: true,
  get: {
    appendWindowEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "appendWindowEnd_get", arguments);
    }
  }.appendWindowEnd,
  set: {
    appendWindowEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "appendWindowEnd_set", arguments);
    }
  }.appendWindowEnd
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "onupdatestart", {
  configurable: true,
  enumerable: true,
  get: {
    onupdatestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onupdatestart_get", arguments);
    }
  }.onupdatestart,
  set: {
    onupdatestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onupdatestart_set", arguments);
    }
  }.onupdatestart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "onupdate", {
  configurable: true,
  enumerable: true,
  get: {
    onupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onupdate_get", arguments);
    }
  }.onupdate,
  set: {
    onupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onupdate_set", arguments);
    }
  }.onupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "onupdateend", {
  configurable: true,
  enumerable: true,
  get: {
    onupdateend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onupdateend_get", arguments);
    }
  }.onupdateend,
  set: {
    onupdateend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onupdateend_set", arguments);
    }
  }.onupdateend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "appendBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "appendBuffer", arguments);
    }
  }.appendBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "changeType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    changeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "changeType", arguments);
    }
  }.changeType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SourceBuffer"].prototype, "SourceBuffer", "remove", arguments);
    }
  }.remove
});