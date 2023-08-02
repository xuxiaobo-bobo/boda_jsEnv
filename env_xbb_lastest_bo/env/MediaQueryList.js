// MediaQueryList对象

MediaQueryList = function MediaQueryList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaQueryList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaQueryList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaQueryList, "MediaQueryList");
MediaQueryList.prototype.__proto__ = EventTarget.prototype;
MediaQueryList.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "media_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "matches", {
  configurable: true,
  enumerable: true,
  get: function matches() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "matches_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "addListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addListener() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "addListener", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaQueryList.prototype, "removeListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeListener() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "removeListener", arguments);
  }
});