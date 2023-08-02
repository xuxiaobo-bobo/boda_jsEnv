// XRInputSource对象

XRInputSource = function XRInputSource() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRInputSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRInputSource 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRInputSource, "XRInputSource");
bodavm.toolsFunc.defineProperty(XRInputSource.prototype, "handedness", {
  configurable: true,
  enumerable: true,
  get: function handedness() {
    return bodavm.toolsFunc.dispatch(this, XRInputSource.prototype, "XRInputSource", "handedness_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSource.prototype, "targetRayMode", {
  configurable: true,
  enumerable: true,
  get: function targetRayMode() {
    return bodavm.toolsFunc.dispatch(this, XRInputSource.prototype, "XRInputSource", "targetRayMode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSource.prototype, "targetRaySpace", {
  configurable: true,
  enumerable: true,
  get: function targetRaySpace() {
    return bodavm.toolsFunc.dispatch(this, XRInputSource.prototype, "XRInputSource", "targetRaySpace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSource.prototype, "gripSpace", {
  configurable: true,
  enumerable: true,
  get: function gripSpace() {
    return bodavm.toolsFunc.dispatch(this, XRInputSource.prototype, "XRInputSource", "gripSpace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSource.prototype, "gamepad", {
  configurable: true,
  enumerable: true,
  get: function gamepad() {
    return bodavm.toolsFunc.dispatch(this, XRInputSource.prototype, "XRInputSource", "gamepad_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRInputSource.prototype, "profiles", {
  configurable: true,
  enumerable: true,
  get: function profiles() {
    return bodavm.toolsFunc.dispatch(this, XRInputSource.prototype, "XRInputSource", "profiles_get", arguments);
  },
  set: undefined
});