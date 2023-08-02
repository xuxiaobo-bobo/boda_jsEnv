// MediaDevices对象

MediaDevices = function MediaDevices() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaDevices)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaDevices 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaDevices, "MediaDevices");
MediaDevices.prototype.__proto__ = EventTarget.prototype;
MediaDevices.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(MediaDevices.prototype, "enumerateDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enumerateDevices() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "enumerateDevices", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaDevices.prototype, "getSupportedConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSupportedConstraints() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "getSupportedConstraints", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaDevices.prototype, "getUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUserMedia() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "getUserMedia", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaDevices.prototype, "ondevicechange", {
  configurable: true,
  enumerable: true,
  get: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "ondevicechange_get", arguments);
  },
  set: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "ondevicechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaDevices.prototype, "getDisplayMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDisplayMedia() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "getDisplayMedia", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaDevices.prototype, "setCaptureHandleConfig", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCaptureHandleConfig() {
    return bodavm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "setCaptureHandleConfig", arguments);
  }
});