// VTTCue对象

bodaEnv.memory.globlProtoObj["VTTCue"] = function VTTCue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VTTCue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VTTCue"], "VTTCue");
bodaEnv.memory.globlProtoObj["VTTCue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["TextTrackCue"].prototype;
bodaEnv.memory.globlProtoObj["VTTCue"].__proto__ = bodaEnv.memory.globlProtoObj["TextTrackCue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "vertical", {
  configurable: true,
  enumerable: true,
  get: {
    vertical() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "vertical_get", arguments);
    }
  }.vertical,
  set: {
    vertical() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "vertical_set", arguments);
    }
  }.vertical
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "snapToLines", {
  configurable: true,
  enumerable: true,
  get: {
    snapToLines() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "snapToLines_get", arguments);
    }
  }.snapToLines,
  set: {
    snapToLines() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "snapToLines_set", arguments);
    }
  }.snapToLines
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "line", {
  configurable: true,
  enumerable: true,
  get: {
    line() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "line_get", arguments);
    }
  }.line,
  set: {
    line() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "line_set", arguments);
    }
  }.line
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "position", {
  configurable: true,
  enumerable: true,
  get: {
    position() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "position_get", arguments);
    }
  }.position,
  set: {
    position() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "position_set", arguments);
    }
  }.position
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "size_get", arguments);
    }
  }.size,
  set: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "size_set", arguments);
    }
  }.size
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "text", {
  configurable: true,
  enumerable: true,
  get: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "text_get", arguments);
    }
  }.text,
  set: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "text_set", arguments);
    }
  }.text
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "getCueAsHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCueAsHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VTTCue"].prototype, "VTTCue", "getCueAsHTML", arguments);
    }
  }.getCueAsHTML
});