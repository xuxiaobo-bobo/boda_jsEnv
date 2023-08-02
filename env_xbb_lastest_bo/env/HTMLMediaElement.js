// HTMLMediaElement对象

HTMLMediaElement = function HTMLMediaElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLMediaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLMediaElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLMediaElement, "HTMLMediaElement");
HTMLMediaElement.prototype.__proto__ = HTMLElement.prototype;
HTMLMediaElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_IDLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_NO_SOURCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_NOTHING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_METADATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_CURRENT_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_FUTURE_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_ENOUGH_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "error_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentSrc", {
  configurable: true,
  enumerable: true,
  get: function currentSrc() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "currentSrc_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "crossOrigin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "networkState", {
  configurable: true,
  enumerable: true,
  get: function networkState() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "networkState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preload", {
  configurable: true,
  enumerable: true,
  get: function preload() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preload_get", arguments);
  },
  set: function preload() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "buffered", {
  configurable: true,
  enumerable: true,
  get: function buffered() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "buffered_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seeking", {
  configurable: true,
  enumerable: true,
  get: function seeking() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "seeking_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "currentTime_get", arguments);
  },
  set: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "currentTime_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "paused", {
  configurable: true,
  enumerable: true,
  get: function paused() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "paused_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultPlaybackRate", {
  configurable: true,
  enumerable: true,
  get: function defaultPlaybackRate() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultPlaybackRate_get", arguments);
  },
  set: function defaultPlaybackRate() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultPlaybackRate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "playbackRate", {
  configurable: true,
  enumerable: true,
  get: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "playbackRate_get", arguments);
  },
  set: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "playbackRate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "played", {
  configurable: true,
  enumerable: true,
  get: function played() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "played_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seekable", {
  configurable: true,
  enumerable: true,
  get: function seekable() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "seekable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "ended", {
  configurable: true,
  enumerable: true,
  get: function ended() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "ended_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "autoplay", {
  configurable: true,
  enumerable: true,
  get: function autoplay() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "autoplay_get", arguments);
  },
  set: function autoplay() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "autoplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "loop", {
  configurable: true,
  enumerable: true,
  get: function loop() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "loop_get", arguments);
  },
  set: function loop() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "loop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preservesPitch", {
  configurable: true,
  enumerable: true,
  get: function preservesPitch() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preservesPitch_get", arguments);
  },
  set: function preservesPitch() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "preservesPitch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controls", {
  configurable: true,
  enumerable: true,
  get: function controls() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controls_get", arguments);
  },
  set: function controls() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controls_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controlsList", {
  configurable: true,
  enumerable: true,
  get: function controlsList() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controlsList_get", arguments);
  },
  set: function controlsList() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "controlsList_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "volume", {
  configurable: true,
  enumerable: true,
  get: function volume() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "volume_get", arguments);
  },
  set: function volume() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "volume_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "muted", {
  configurable: true,
  enumerable: true,
  get: function muted() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "muted_get", arguments);
  },
  set: function muted() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "muted_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultMuted", {
  configurable: true,
  enumerable: true,
  get: function defaultMuted() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultMuted_get", arguments);
  },
  set: function defaultMuted() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "defaultMuted_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "textTracks", {
  configurable: true,
  enumerable: true,
  get: function textTracks() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "textTracks_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitAudioDecodedByteCount", {
  configurable: true,
  enumerable: true,
  get: function webkitAudioDecodedByteCount() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "webkitAudioDecodedByteCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitVideoDecodedByteCount", {
  configurable: true,
  enumerable: true,
  get: function webkitVideoDecodedByteCount() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "webkitVideoDecodedByteCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onencrypted", {
  configurable: true,
  enumerable: true,
  get: function onencrypted() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onencrypted_get", arguments);
  },
  set: function onencrypted() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onencrypted_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onwaitingforkey", {
  configurable: true,
  enumerable: true,
  get: function onwaitingforkey() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onwaitingforkey_get", arguments);
  },
  set: function onwaitingforkey() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "onwaitingforkey_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "srcObject", {
  configurable: true,
  enumerable: true,
  get: function srcObject() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "srcObject_get", arguments);
  },
  set: function srcObject() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "srcObject_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_EMPTY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_IDLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_NO_SOURCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_NOTHING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_METADATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_CURRENT_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_FUTURE_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_ENOUGH_DATA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "addTextTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTextTrack() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "addTextTrack", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "canPlayType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canPlayType() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "canPlayType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "captureStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureStream() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "captureStream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function load() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "load", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pause() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "pause", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "play", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function play() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "play", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "sinkId", {
  configurable: true,
  enumerable: true,
  get: function sinkId() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "sinkId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "remote", {
  configurable: true,
  enumerable: true,
  get: function remote() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "remote_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "disableRemotePlayback", {
  configurable: true,
  enumerable: true,
  get: function disableRemotePlayback() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "disableRemotePlayback_get", arguments);
  },
  set: function disableRemotePlayback() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "disableRemotePlayback_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setSinkId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSinkId() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "setSinkId", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "mediaKeys", {
  configurable: true,
  enumerable: true,
  get: function mediaKeys() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "mediaKeys_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setMediaKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMediaKeys() {
    return bodavm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElement", "setMediaKeys", arguments);
  }
});