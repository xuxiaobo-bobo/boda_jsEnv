// RTCEncodedVideoFrame对象

RTCEncodedVideoFrame = function RTCEncodedVideoFrame() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCEncodedVideoFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCEncodedVideoFrame 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCEncodedVideoFrame, "RTCEncodedVideoFrame");
bodavm.toolsFunc.defineProperty(RTCEncodedVideoFrame.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedVideoFrame.prototype, "RTCEncodedVideoFrame", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCEncodedVideoFrame.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedVideoFrame.prototype, "RTCEncodedVideoFrame", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCEncodedVideoFrame.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedVideoFrame.prototype, "RTCEncodedVideoFrame", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedVideoFrame.prototype, "RTCEncodedVideoFrame", "data_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCEncodedVideoFrame.prototype, "getMetadata", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getMetadata() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedVideoFrame.prototype, "RTCEncodedVideoFrame", "getMetadata", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCEncodedVideoFrame.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedVideoFrame.prototype, "RTCEncodedVideoFrame", "toString", arguments);
  }
});