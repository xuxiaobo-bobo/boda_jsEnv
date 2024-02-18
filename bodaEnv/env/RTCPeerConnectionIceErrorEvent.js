// RTCPeerConnectionIceErrorEvent对象

bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"] = function RTCPeerConnectionIceErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCPeerConnectionIceErrorEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"], "RTCPeerConnectionIceErrorEvent");
bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "address", {
  configurable: true,
  enumerable: true,
  get: {
    address() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "RTCPeerConnectionIceErrorEvent", "address_get", arguments);
    }
  }.address,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "RTCPeerConnectionIceErrorEvent", "port_get", arguments);
    }
  }.port,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "hostCandidate", {
  configurable: true,
  enumerable: true,
  get: {
    hostCandidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "RTCPeerConnectionIceErrorEvent", "hostCandidate_get", arguments);
    }
  }.hostCandidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "RTCPeerConnectionIceErrorEvent", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "errorCode", {
  configurable: true,
  enumerable: true,
  get: {
    errorCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "RTCPeerConnectionIceErrorEvent", "errorCode_get", arguments);
    }
  }.errorCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "errorText", {
  configurable: true,
  enumerable: true,
  get: {
    errorText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"].prototype, "RTCPeerConnectionIceErrorEvent", "errorText_get", arguments);
    }
  }.errorText,
  set: undefined
});