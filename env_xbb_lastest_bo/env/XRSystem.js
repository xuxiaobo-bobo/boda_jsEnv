// XRSystem对象

XRSystem = function XRSystem() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRSystem)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRSystem 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRSystem, "XRSystem");
XRSystem.prototype.__proto__ = EventTarget.prototype;
XRSystem.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(XRSystem.prototype, "ondevicechange", {
  configurable: true,
  enumerable: true,
  get: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "ondevicechange_get", arguments);
  },
  set: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "ondevicechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSystem.prototype, "isSessionSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSessionSupported() {
    return bodavm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "isSessionSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSystem.prototype, "requestSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestSession() {
    return bodavm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "requestSession", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRSystem.prototype, "supportsSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function supportsSession() {
    return bodavm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "supportsSession", arguments);
  }
});