// TextTrack对象

TextTrack = function TextTrack() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TextTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextTrack 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextTrack, "TextTrack");
TextTrack.prototype.__proto__ = EventTarget.prototype;
TextTrack.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "kind_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "label_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "language", {
  configurable: true,
  enumerable: true,
  get: function language() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "language_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "mode_get", arguments);
  },
  set: function mode() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "mode_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "cues", {
  configurable: true,
  enumerable: true,
  get: function cues() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "cues_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "activeCues", {
  configurable: true,
  enumerable: true,
  get: function activeCues() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "activeCues_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "oncuechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "addCue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addCue() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "addCue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrack.prototype, "removeCue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeCue() {
    return bodavm.toolsFunc.dispatch(this, TextTrack.prototype, "TextTrack", "removeCue", arguments);
  }
});