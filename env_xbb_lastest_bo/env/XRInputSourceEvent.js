// XRInputSourceEvent对象

XRInputSourceEvent = function XRInputSourceEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRInputSourceEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRInputSourceEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRInputSourceEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRInputSourceEvent, "XRInputSourceEvent");
XRInputSourceEvent.prototype.__proto__ = Event.prototype;
XRInputSourceEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(XRInputSourceEvent.prototype, "frame", {
  configurable: true,
  enumerable: true,
  get: function frame() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceEvent.prototype, "XRInputSourceEvent", "frame_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSourceEvent.prototype, "inputSource", {
  configurable: true,
  enumerable: true,
  get: function inputSource() {
    return bodavm.toolsFunc.dispatch(this, XRInputSourceEvent.prototype, "XRInputSourceEvent", "inputSource_get", arguments);
  },
  set: undefined
});