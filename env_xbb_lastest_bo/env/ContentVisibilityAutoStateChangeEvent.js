// ContentVisibilityAutoStateChangeEvent对象

ContentVisibilityAutoStateChangeEvent = function ContentVisibilityAutoStateChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ContentVisibilityAutoStateChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ContentVisibilityAutoStateChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ContentVisibilityAutoStateChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ContentVisibilityAutoStateChangeEvent, "ContentVisibilityAutoStateChangeEvent");
ContentVisibilityAutoStateChangeEvent.prototype.__proto__ = Event.prototype;
ContentVisibilityAutoStateChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(ContentVisibilityAutoStateChangeEvent.prototype, "skipped", {
  configurable: true,
  enumerable: true,
  get: function skipped() {
    return bodavm.toolsFunc.dispatch(this, ContentVisibilityAutoStateChangeEvent.prototype, "ContentVisibilityAutoStateChangeEvent", "skipped_get", arguments);
  },
  set: undefined
});