// MediaStream对象

bodaEnv.memory.globlProtoObj["MediaStream"] = function MediaStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStream"], "MediaStream");
bodaEnv.memory.globlProtoObj["MediaStream"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaStream"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "active", {
  configurable: true,
  enumerable: true,
  get: {
    active() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "active_get", arguments);
    }
  }.active,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "onaddtrack", {
  configurable: true,
  enumerable: true,
  get: {
    onaddtrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "onaddtrack_get", arguments);
    }
  }.onaddtrack,
  set: {
    onaddtrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "onaddtrack_set", arguments);
    }
  }.onaddtrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "onremovetrack", {
  configurable: true,
  enumerable: true,
  get: {
    onremovetrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "onremovetrack_get", arguments);
    }
  }.onremovetrack,
  set: {
    onremovetrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "onremovetrack_set", arguments);
    }
  }.onremovetrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "onactive", {
  configurable: true,
  enumerable: true,
  get: {
    onactive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "onactive_get", arguments);
    }
  }.onactive,
  set: {
    onactive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "onactive_set", arguments);
    }
  }.onactive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "oninactive", {
  configurable: true,
  enumerable: true,
  get: {
    oninactive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "oninactive_get", arguments);
    }
  }.oninactive,
  set: {
    oninactive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "oninactive_set", arguments);
    }
  }.oninactive
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "addTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "addTrack", arguments);
    }
  }.addTrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "clone", arguments);
    }
  }.clone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "getAudioTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAudioTracks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "getAudioTracks", arguments);
    }
  }.getAudioTracks
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "getTrackById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTrackById() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "getTrackById", arguments);
    }
  }.getTrackById
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "getTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTracks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "getTracks", arguments);
    }
  }.getTracks
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "getVideoTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getVideoTracks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "getVideoTracks", arguments);
    }
  }.getVideoTracks
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "removeTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStream"].prototype, "MediaStream", "removeTrack", arguments);
    }
  }.removeTrack
});