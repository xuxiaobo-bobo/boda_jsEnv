// XRInputSourcesChangeEvent对象

XRInputSourcesChangeEvent = function XRInputSourcesChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRInputSourcesChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRInputSourcesChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRInputSourcesChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRInputSourcesChangeEvent, "XRInputSourcesChangeEvent");
XRInputSourcesChangeEvent.prototype.__proto__ = Event.prototype;
XRInputSourcesChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(XRInputSourcesChangeEvent.prototype, "session", {
  configurable: true,
  enumerable: true,
  get: function session() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourcesChangeEvent.prototype, "XRInputSourcesChangeEvent", "session_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSourcesChangeEvent.prototype, "added", {
  configurable: true,
  enumerable: true,
  get: function added() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourcesChangeEvent.prototype, "XRInputSourcesChangeEvent", "added_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSourcesChangeEvent.prototype, "removed", {
  configurable: true,
  enumerable: true,
  get: function removed() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourcesChangeEvent.prototype, "XRInputSourcesChangeEvent", "removed_get", arguments);
  },
  set: undefined
});