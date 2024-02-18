// MediaStreamTrack对象

bodaEnv.memory.globlProtoObj["MediaStreamTrack"] = function MediaStreamTrack() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamTrack 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamTrack"], "MediaStreamTrack");
bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaStreamTrack"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: {
    kind() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "kind_get", arguments);
    }
  }.kind,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "label_get", arguments);
    }
  }.label,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "enabled", {
  configurable: true,
  enumerable: true,
  get: {
    enabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "enabled_get", arguments);
    }
  }.enabled,
  set: {
    enabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "enabled_set", arguments);
    }
  }.enabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "muted", {
  configurable: true,
  enumerable: true,
  get: {
    muted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "muted_get", arguments);
    }
  }.muted,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "onmute", {
  configurable: true,
  enumerable: true,
  get: {
    onmute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "onmute_get", arguments);
    }
  }.onmute,
  set: {
    onmute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "onmute_set", arguments);
    }
  }.onmute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "onunmute", {
  configurable: true,
  enumerable: true,
  get: {
    onunmute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "onunmute_get", arguments);
    }
  }.onunmute,
  set: {
    onunmute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "onunmute_set", arguments);
    }
  }.onunmute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "onended_get", arguments);
    }
  }.onended,
  set: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "onended_set", arguments);
    }
  }.onended
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "contentHint", {
  configurable: true,
  enumerable: true,
  get: {
    contentHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "contentHint_get", arguments);
    }
  }.contentHint,
  set: {
    contentHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "contentHint_set", arguments);
    }
  }.contentHint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "applyConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    applyConstraints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "applyConstraints", arguments);
    }
  }.applyConstraints
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "clone", arguments);
    }
  }.clone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "getCapabilities", arguments);
    }
  }.getCapabilities
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "getConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getConstraints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "getConstraints", arguments);
    }
  }.getConstraints
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "getSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSettings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "getSettings", arguments);
    }
  }.getSettings
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "stop", arguments);
    }
  }.stop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "oncapturehandlechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncapturehandlechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "oncapturehandlechange_get", arguments);
    }
  }.oncapturehandlechange,
  set: {
    oncapturehandlechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "oncapturehandlechange_set", arguments);
    }
  }.oncapturehandlechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "getCaptureHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCaptureHandle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype, "MediaStreamTrack", "getCaptureHandle", arguments);
    }
  }.getCaptureHandle
});