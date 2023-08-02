// MediaSource对象

MediaSource = function MediaSource() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaSource 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaSource, "MediaSource");
MediaSource.prototype.__proto__ = EventTarget.prototype;
MediaSource.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(MediaSource, "canConstructInDedicatedWorker", {
  configurable: true,
  enumerable: true,
  get: function canConstructInDedicatedWorker() {
    return bodavm.toolsFunc.dispatch(this, MediaSource, "MediaSource", "canConstructInDedicatedWorker_get", arguments, true);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaSource, "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTypeSupported() {
    return bodavm.toolsFunc.dispatch(this, MediaSource, "MediaSource", "isTypeSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "sourceBuffers", {
  configurable: true,
  enumerable: true,
  get: function sourceBuffers() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "sourceBuffers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "activeSourceBuffers", {
  configurable: true,
  enumerable: true,
  get: function activeSourceBuffers() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "activeSourceBuffers_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "duration_get", arguments);
  },
  set: function duration() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "duration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "onsourceopen", {
  configurable: true,
  enumerable: true,
  get: function onsourceopen() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "onsourceopen_get", arguments);
  },
  set: function onsourceopen() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "onsourceopen_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "onsourceended", {
  configurable: true,
  enumerable: true,
  get: function onsourceended() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "onsourceended_get", arguments);
  },
  set: function onsourceended() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "onsourceended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "onsourceclose", {
  configurable: true,
  enumerable: true,
  get: function onsourceclose() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "onsourceclose_get", arguments);
  },
  set: function onsourceclose() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "onsourceclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "addSourceBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addSourceBuffer() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "addSourceBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "clearLiveSeekableRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearLiveSeekableRange() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "clearLiveSeekableRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "endOfStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endOfStream() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "endOfStream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "removeSourceBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeSourceBuffer() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "removeSourceBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaSource.prototype, "setLiveSeekableRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setLiveSeekableRange() {
    return bodavm.toolsFunc.dispatch(this, MediaSource.prototype, "MediaSource", "setLiveSeekableRange", arguments);
  }
});