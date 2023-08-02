// TextTrackCue对象

TextTrackCue = function TextTrackCue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TextTrackCue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextTrackCue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextTrackCue, "TextTrackCue");
TextTrackCue.prototype.__proto__ = EventTarget.prototype;
TextTrackCue.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "track_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "id_get", arguments);
  },
  set: function id() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "id_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "startTime", {
  configurable: true,
  enumerable: true,
  get: function startTime() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "startTime_get", arguments);
  },
  set: function startTime() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "startTime_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "endTime", {
  configurable: true,
  enumerable: true,
  get: function endTime() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "endTime_get", arguments);
  },
  set: function endTime() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "endTime_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "pauseOnExit", {
  configurable: true,
  enumerable: true,
  get: function pauseOnExit() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "pauseOnExit_get", arguments);
  },
  set: function pauseOnExit() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "pauseOnExit_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "onenter", {
  configurable: true,
  enumerable: true,
  get: function onenter() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "onenter_get", arguments);
  },
  set: function onenter() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "onenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackCue.prototype, "onexit", {
  configurable: true,
  enumerable: true,
  get: function onexit() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "onexit_get", arguments);
  },
  set: function onexit() {
    return bodavm.toolsFunc.dispatch(this, TextTrackCue.prototype, "TextTrackCue", "onexit_set", arguments);
  }
});