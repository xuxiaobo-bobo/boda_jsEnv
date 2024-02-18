// HTMLMediaElement对象

bodaEnv.memory.globlProtoObj["HTMLMediaElement"] = function HTMLMediaElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLMediaElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "HTMLMediaElement");
bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLMediaElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "NETWORK_EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "NETWORK_IDLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "NETWORK_LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "NETWORK_NO_SOURCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "HAVE_NOTHING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "HAVE_METADATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "HAVE_CURRENT_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "HAVE_FUTURE_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"], "HAVE_ENOUGH_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "error_get", arguments);
    }
  }.error,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "currentSrc", {
  configurable: true,
  enumerable: true,
  get: {
    currentSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "currentSrc_get", arguments);
    }
  }.currentSrc,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "crossOrigin_get", arguments);
    }
  }.crossOrigin,
  set: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "crossOrigin_set", arguments);
    }
  }.crossOrigin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "networkState", {
  configurable: true,
  enumerable: true,
  get: {
    networkState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "networkState_get", arguments);
    }
  }.networkState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "preload", {
  configurable: true,
  enumerable: true,
  get: {
    preload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "preload_get", arguments);
    }
  }.preload,
  set: {
    preload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "preload_set", arguments);
    }
  }.preload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "buffered", {
  configurable: true,
  enumerable: true,
  get: {
    buffered() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "buffered_get", arguments);
    }
  }.buffered,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "seeking", {
  configurable: true,
  enumerable: true,
  get: {
    seeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "seeking_get", arguments);
    }
  }.seeking,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "currentTime_get", arguments);
    }
  }.currentTime,
  set: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "currentTime_set", arguments);
    }
  }.currentTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "paused", {
  configurable: true,
  enumerable: true,
  get: {
    paused() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "paused_get", arguments);
    }
  }.paused,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "defaultPlaybackRate", {
  configurable: true,
  enumerable: true,
  get: {
    defaultPlaybackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "defaultPlaybackRate_get", arguments);
    }
  }.defaultPlaybackRate,
  set: {
    defaultPlaybackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "defaultPlaybackRate_set", arguments);
    }
  }.defaultPlaybackRate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "playbackRate", {
  configurable: true,
  enumerable: true,
  get: {
    playbackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "playbackRate_get", arguments);
    }
  }.playbackRate,
  set: {
    playbackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "playbackRate_set", arguments);
    }
  }.playbackRate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "played", {
  configurable: true,
  enumerable: true,
  get: {
    played() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "played_get", arguments);
    }
  }.played,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "seekable", {
  configurable: true,
  enumerable: true,
  get: {
    seekable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "seekable_get", arguments);
    }
  }.seekable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "ended", {
  configurable: true,
  enumerable: true,
  get: {
    ended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "ended_get", arguments);
    }
  }.ended,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "autoplay", {
  configurable: true,
  enumerable: true,
  get: {
    autoplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "autoplay_get", arguments);
    }
  }.autoplay,
  set: {
    autoplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "autoplay_set", arguments);
    }
  }.autoplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "loop", {
  configurable: true,
  enumerable: true,
  get: {
    loop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "loop_get", arguments);
    }
  }.loop,
  set: {
    loop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "loop_set", arguments);
    }
  }.loop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "preservesPitch", {
  configurable: true,
  enumerable: true,
  get: {
    preservesPitch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "preservesPitch_get", arguments);
    }
  }.preservesPitch,
  set: {
    preservesPitch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "preservesPitch_set", arguments);
    }
  }.preservesPitch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "controls", {
  configurable: true,
  enumerable: true,
  get: {
    controls() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "controls_get", arguments);
    }
  }.controls,
  set: {
    controls() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "controls_set", arguments);
    }
  }.controls
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "controlsList", {
  configurable: true,
  enumerable: true,
  get: {
    controlsList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "controlsList_get", arguments);
    }
  }.controlsList,
  set: {
    controlsList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "controlsList_set", arguments);
    }
  }.controlsList
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "volume", {
  configurable: true,
  enumerable: true,
  get: {
    volume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "volume_get", arguments);
    }
  }.volume,
  set: {
    volume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "volume_set", arguments);
    }
  }.volume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "muted", {
  configurable: true,
  enumerable: true,
  get: {
    muted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "muted_get", arguments);
    }
  }.muted,
  set: {
    muted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "muted_set", arguments);
    }
  }.muted
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "defaultMuted", {
  configurable: true,
  enumerable: true,
  get: {
    defaultMuted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "defaultMuted_get", arguments);
    }
  }.defaultMuted,
  set: {
    defaultMuted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "defaultMuted_set", arguments);
    }
  }.defaultMuted
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "textTracks", {
  configurable: true,
  enumerable: true,
  get: {
    textTracks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "textTracks_get", arguments);
    }
  }.textTracks,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "webkitAudioDecodedByteCount", {
  configurable: true,
  enumerable: true,
  get: {
    webkitAudioDecodedByteCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "webkitAudioDecodedByteCount_get", arguments);
    }
  }.webkitAudioDecodedByteCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "webkitVideoDecodedByteCount", {
  configurable: true,
  enumerable: true,
  get: {
    webkitVideoDecodedByteCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "webkitVideoDecodedByteCount_get", arguments);
    }
  }.webkitVideoDecodedByteCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "onencrypted", {
  configurable: true,
  enumerable: true,
  get: {
    onencrypted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "onencrypted_get", arguments);
    }
  }.onencrypted,
  set: {
    onencrypted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "onencrypted_set", arguments);
    }
  }.onencrypted
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "onwaitingforkey", {
  configurable: true,
  enumerable: true,
  get: {
    onwaitingforkey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "onwaitingforkey_get", arguments);
    }
  }.onwaitingforkey,
  set: {
    onwaitingforkey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "onwaitingforkey_set", arguments);
    }
  }.onwaitingforkey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "srcObject", {
  configurable: true,
  enumerable: true,
  get: {
    srcObject() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "srcObject_get", arguments);
    }
  }.srcObject,
  set: {
    srcObject() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "srcObject_set", arguments);
    }
  }.srcObject
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "NETWORK_EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "NETWORK_IDLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "NETWORK_LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "NETWORK_NO_SOURCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HAVE_NOTHING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HAVE_METADATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HAVE_CURRENT_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HAVE_FUTURE_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HAVE_ENOUGH_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "addTextTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addTextTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "addTextTrack", arguments);
    }
  }.addTextTrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "canPlayType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    canPlayType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "canPlayType", arguments);
    }
  }.canPlayType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "captureStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    captureStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "captureStream", arguments);
    }
  }.captureStream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    load() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "load", arguments);
    }
  }.load
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "pause", arguments);
    }
  }.pause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "play", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    play() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "play", arguments);
    }
  }.play
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "sinkId", {
  configurable: true,
  enumerable: true,
  get: {
    sinkId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "sinkId_get", arguments);
    }
  }.sinkId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "remote", {
  configurable: true,
  enumerable: true,
  get: {
    remote() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "remote_get", arguments);
    }
  }.remote,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "disableRemotePlayback", {
  configurable: true,
  enumerable: true,
  get: {
    disableRemotePlayback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "disableRemotePlayback_get", arguments);
    }
  }.disableRemotePlayback,
  set: {
    disableRemotePlayback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "disableRemotePlayback_set", arguments);
    }
  }.disableRemotePlayback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "setSinkId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setSinkId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "setSinkId", arguments);
    }
  }.setSinkId
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "mediaKeys", {
  configurable: true,
  enumerable: true,
  get: {
    mediaKeys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "mediaKeys_get", arguments);
    }
  }.mediaKeys,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "setMediaKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setMediaKeys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype, "HTMLMediaElement", "setMediaKeys", arguments);
    }
  }.setMediaKeys
});