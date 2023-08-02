// RTCEncodedAudioFrame对象

RTCEncodedAudioFrame = function RTCEncodedAudioFrame() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCEncodedAudioFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCEncodedAudioFrame 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCEncodedAudioFrame, "RTCEncodedAudioFrame");
bodavm.toolsFunc.defineProperty(RTCEncodedAudioFrame.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedAudioFrame.prototype, "RTCEncodedAudioFrame", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCEncodedAudioFrame.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedAudioFrame.prototype, "RTCEncodedAudioFrame", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedAudioFrame.prototype, "RTCEncodedAudioFrame", "data_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCEncodedAudioFrame.prototype, "getMetadata", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getMetadata() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedAudioFrame.prototype, "RTCEncodedAudioFrame", "getMetadata", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCEncodedAudioFrame.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, RTCEncodedAudioFrame.prototype, "RTCEncodedAudioFrame", "toString", arguments);
  }
});