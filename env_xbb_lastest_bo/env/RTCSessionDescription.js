// RTCSessionDescription对象

RTCSessionDescription = function RTCSessionDescription() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCSessionDescription 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCSessionDescription, "RTCSessionDescription");
bodavm.toolsFunc.defineProperty(RTCSessionDescription.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, RTCSessionDescription.prototype, "RTCSessionDescription", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, RTCSessionDescription.prototype, "RTCSessionDescription", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCSessionDescription.prototype, "sdp", {
  configurable: true,
  enumerable: true,
  get: function sdp() {
    return bodavm.toolsFunc.dispatch(this, RTCSessionDescription.prototype, "RTCSessionDescription", "sdp_get", arguments);
  },
  set: function sdp() {
    return bodavm.toolsFunc.dispatch(this, RTCSessionDescription.prototype, "RTCSessionDescription", "sdp_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCSessionDescription.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, RTCSessionDescription.prototype, "RTCSessionDescription", "toJSON", arguments);
  }
});