// MediaSession对象

bodavm.memory.globalobj['MediaSession'] = function MediaSession() {
  console.log_copy('MediaSession 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaSession)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaSession'], "MediaSession");
bodavm.toolsFunc.defineProperty('MediaSession', "metadata", {
  configurable: true,
  enumerable: true,
  get: function metadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "metadata_get", arguments);
  },
  set: function metadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "metadata_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSession', "playbackState", {
  configurable: true,
  enumerable: true,
  get: function playbackState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "playbackState_get", arguments);
  },
  set: function playbackState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "playbackState_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSession', "setActionHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setActionHandler() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "setActionHandler", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSession', "setCameraActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCameraActive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "setCameraActive", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSession', "setMicrophoneActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMicrophoneActive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "setMicrophoneActive", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaSession', "setPositionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPositionState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaSession'].prototype, "MediaSession", "setPositionState", arguments);
  }
}, 'prototype');