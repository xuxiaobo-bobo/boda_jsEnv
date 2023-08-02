// MediaSession对象

MediaSession = function MediaSession() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaSession)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaSession 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaSession, "MediaSession");
bodavm.toolsFunc.defineProperty(MediaSession.prototype, "metadata", {
  configurable: true,
  enumerable: true,
  get: function metadata() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "metadata_get", arguments);
  },
  set: function metadata() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "metadata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSession.prototype, "playbackState", {
  configurable: true,
  enumerable: true,
  get: function playbackState() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "playbackState_get", arguments);
  },
  set: function playbackState() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "playbackState_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSession.prototype, "setActionHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setActionHandler() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "setActionHandler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSession.prototype, "setCameraActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCameraActive() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "setCameraActive", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSession.prototype, "setMicrophoneActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMicrophoneActive() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "setMicrophoneActive", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSession.prototype, "setPositionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPositionState() {
    return bodavm.toolsFunc.dispatch(this, MediaSession.prototype, "MediaSession", "setPositionState", arguments);
  }
});