// VTTCue对象

VTTCue = function VTTCue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof VTTCue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VTTCue': 3 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('VTTCue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(VTTCue, "VTTCue");
VTTCue.prototype.__proto__ = TextTrackCue.prototype;
VTTCue.__proto__ = TextTrackCue;
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "vertical", {
  configurable: true,
  enumerable: true,
  get: function vertical() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "vertical_get", arguments);
  },
  set: function vertical() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "vertical_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "snapToLines", {
  configurable: true,
  enumerable: true,
  get: function snapToLines() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "snapToLines_get", arguments);
  },
  set: function snapToLines() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "snapToLines_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "line", {
  configurable: true,
  enumerable: true,
  get: function line() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "line_get", arguments);
  },
  set: function line() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "line_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "position", {
  configurable: true,
  enumerable: true,
  get: function position() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "position_get", arguments);
  },
  set: function position() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "position_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "size_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VTTCue.prototype, "getCueAsHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCueAsHTML() {
    return bodavm.toolsFunc.dispatch(this, VTTCue.prototype, "VTTCue", "getCueAsHTML", arguments);
  }
});