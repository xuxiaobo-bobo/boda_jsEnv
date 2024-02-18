// RTCPeerConnectionIceEvent对象

bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceEvent"] = function RTCPeerConnectionIceEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCPeerConnectionIceEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceEvent"], "RTCPeerConnectionIceEvent");
bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceEvent"].prototype, "candidate", {
  configurable: true,
  enumerable: true,
  get: {
    candidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceEvent"].prototype, "RTCPeerConnectionIceEvent", "candidate_get", arguments);
    }
  }.candidate,
  set: undefined
});