// RTCDTMFSender对象

RTCDTMFSender = function RTCDTMFSender() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCDTMFSender)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCDTMFSender 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCDTMFSender, "RTCDTMFSender");
RTCDTMFSender.prototype.__proto__ = EventTarget.prototype;
RTCDTMFSender.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "ontonechange", {
  configurable: true,
  enumerable: true,
  get: function ontonechange() {
    return bodavm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "ontonechange_get", arguments);
  },
  set: function ontonechange() {
    return bodavm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "ontonechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "canInsertDTMF", {
  configurable: true,
  enumerable: true,
  get: function canInsertDTMF() {
    return bodavm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "canInsertDTMF_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "toneBuffer", {
  configurable: true,
  enumerable: true,
  get: function toneBuffer() {
    return bodavm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "toneBuffer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "insertDTMF", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertDTMF() {
    return bodavm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "insertDTMF", arguments);
  }
});