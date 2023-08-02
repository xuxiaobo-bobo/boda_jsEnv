// XRReferenceSpaceEvent对象

XRReferenceSpaceEvent = function XRReferenceSpaceEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRReferenceSpaceEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRReferenceSpaceEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRReferenceSpaceEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRReferenceSpaceEvent, "XRReferenceSpaceEvent");
XRReferenceSpaceEvent.prototype.__proto__ = Event.prototype;
XRReferenceSpaceEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(XRReferenceSpaceEvent.prototype, "referenceSpace", {
  configurable: true,
  enumerable: true,
  get: function referenceSpace() {
    return bodavm.toolsFunc.dispatch(this, XRReferenceSpaceEvent.prototype, "XRReferenceSpaceEvent", "referenceSpace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRReferenceSpaceEvent.prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: function transform() {
    return bodavm.toolsFunc.dispatch(this, XRReferenceSpaceEvent.prototype, "XRReferenceSpaceEvent", "transform_get", arguments);
  },
  set: undefined
});