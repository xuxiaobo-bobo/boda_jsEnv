// TextTrackList对象

TextTrackList = function TextTrackList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TextTrackList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextTrackList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextTrackList, "TextTrackList");
TextTrackList.prototype.__proto__ = EventTarget.prototype;
TextTrackList.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "onaddtrack", {
  configurable: true,
  enumerable: true,
  get: function onaddtrack() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onaddtrack_get", arguments);
  },
  set: function onaddtrack() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onaddtrack_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "onremovetrack", {
  configurable: true,
  enumerable: true,
  get: function onremovetrack() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onremovetrack_get", arguments);
  },
  set: function onremovetrack() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "onremovetrack_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextTrackList.prototype, "getTrackById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTrackById() {
    return bodavm.toolsFunc.dispatch(this, TextTrackList.prototype, "TextTrackList", "getTrackById", arguments);
  }
});