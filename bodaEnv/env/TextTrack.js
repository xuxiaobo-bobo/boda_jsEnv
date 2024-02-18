// TextTrack对象

bodaEnv.memory.globlProtoObj["TextTrack"] = function TextTrack() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextTrack 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextTrack"], "TextTrack");
bodaEnv.memory.globlProtoObj["TextTrack"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["TextTrack"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: {
    kind() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "kind_get", arguments);
    }
  }.kind,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "label_get", arguments);
    }
  }.label,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "language", {
  configurable: true,
  enumerable: true,
  get: {
    language() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "language_get", arguments);
    }
  }.language,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "mode_get", arguments);
    }
  }.mode,
  set: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "mode_set", arguments);
    }
  }.mode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "cues", {
  configurable: true,
  enumerable: true,
  get: {
    cues() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "cues_get", arguments);
    }
  }.cues,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "activeCues", {
  configurable: true,
  enumerable: true,
  get: {
    activeCues() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "activeCues_get", arguments);
    }
  }.activeCues,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "oncuechange_get", arguments);
    }
  }.oncuechange,
  set: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "oncuechange_set", arguments);
    }
  }.oncuechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "addCue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addCue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "addCue", arguments);
    }
  }.addCue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "removeCue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeCue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextTrack"].prototype, "TextTrack", "removeCue", arguments);
    }
  }.removeCue
});