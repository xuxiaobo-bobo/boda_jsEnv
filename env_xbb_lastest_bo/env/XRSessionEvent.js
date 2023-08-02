// XRSessionEvent对象

XRSessionEvent = function XRSessionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRSessionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRSessionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRSessionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRSessionEvent, "XRSessionEvent");
XRSessionEvent.prototype.__proto__ = Event.prototype;
XRSessionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(XRSessionEvent.prototype, "session", {
  configurable: true,
  enumerable: true,
  get: function session() {
    return bodavm.toolsFunc.dispatch(this, XRSessionEvent.prototype, "XRSessionEvent", "session_get", arguments);
  },
  set: undefined
});