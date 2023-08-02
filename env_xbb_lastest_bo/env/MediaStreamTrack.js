// MediaStreamTrack对象

MediaStreamTrack = function MediaStreamTrack() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamTrack 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamTrack, "MediaStreamTrack");
MediaStreamTrack.prototype.__proto__ = EventTarget.prototype;
MediaStreamTrack.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "kind_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "label_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "enabled", {
  configurable: true,
  enumerable: true,
  get: function enabled() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "enabled_get", arguments);
  },
  set: function enabled() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "enabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "muted", {
  configurable: true,
  enumerable: true,
  get: function muted() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "muted_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "onmute", {
  configurable: true,
  enumerable: true,
  get: function onmute() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "onmute_get", arguments);
  },
  set: function onmute() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "onmute_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "onunmute", {
  configurable: true,
  enumerable: true,
  get: function onunmute() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "onunmute_get", arguments);
  },
  set: function onunmute() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "onunmute_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "onended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "contentHint", {
  configurable: true,
  enumerable: true,
  get: function contentHint() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "contentHint_get", arguments);
  },
  set: function contentHint() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "contentHint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "applyConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function applyConstraints() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "applyConstraints", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "clone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "getCapabilities", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "getConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConstraints() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "getConstraints", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "getSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSettings() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "getSettings", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "stop", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "oncapturehandlechange", {
  configurable: true,
  enumerable: true,
  get: function oncapturehandlechange() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "oncapturehandlechange_get", arguments);
  },
  set: function oncapturehandlechange() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "oncapturehandlechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStreamTrack.prototype, "getCaptureHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCaptureHandle() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrack.prototype, "MediaStreamTrack", "getCaptureHandle", arguments);
  }
});