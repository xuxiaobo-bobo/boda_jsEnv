// RTCPeerConnectionIceEvent对象

bodavm.memory.globalobj['RTCPeerConnectionIceEvent'] = function RTCPeerConnectionIceEvent() {
  console.log_copy('RTCPeerConnectionIceEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCPeerConnectionIceEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCPeerConnectionIceEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCPeerConnectionIceEvent'], "RTCPeerConnectionIceEvent");
bodavm.memory.globalobj['RTCPeerConnectionIceEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCPeerConnectionIceEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCPeerConnectionIceEvent', "candidate", {
  configurable: true,
  enumerable: true,
  get: function candidate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCPeerConnectionIceEvent'].prototype, "RTCPeerConnectionIceEvent", "candidate_get", arguments);
  },
  set: undefined
}, 'prototype');