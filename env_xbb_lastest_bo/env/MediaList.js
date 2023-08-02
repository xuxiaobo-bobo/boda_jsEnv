// MediaList对象

MediaList = function MediaList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaList, "MediaList");
bodavm.toolsFunc.defineProperty(MediaList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaList.prototype, "mediaText", {
  configurable: true,
  enumerable: true,
  get: function mediaText() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "mediaText_get", arguments);
  },
  set: function mediaText() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "mediaText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaList.prototype, "appendMedium", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendMedium() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "appendMedium", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaList.prototype, "deleteMedium", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteMedium() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "deleteMedium", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaList.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, MediaList.prototype, "MediaList", "toString", arguments);
  }
});