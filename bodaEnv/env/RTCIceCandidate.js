// RTCIceCandidate对象

bodaEnv.memory.globlProtoObj["RTCIceCandidate"] = function RTCIceCandidate() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCIceCandidate 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCIceCandidate"], "RTCIceCandidate");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "candidate", {
  configurable: true,
  enumerable: true,
  get: {
    candidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "candidate_get", arguments);
    }
  }.candidate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "sdpMid", {
  configurable: true,
  enumerable: true,
  get: {
    sdpMid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "sdpMid_get", arguments);
    }
  }.sdpMid,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "sdpMLineIndex", {
  configurable: true,
  enumerable: true,
  get: {
    sdpMLineIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "sdpMLineIndex_get", arguments);
    }
  }.sdpMLineIndex,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "foundation", {
  configurable: true,
  enumerable: true,
  get: {
    foundation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "foundation_get", arguments);
    }
  }.foundation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "component", {
  configurable: true,
  enumerable: true,
  get: {
    component() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "component_get", arguments);
    }
  }.component,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "priority", {
  configurable: true,
  enumerable: true,
  get: {
    priority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "priority_get", arguments);
    }
  }.priority,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "address", {
  configurable: true,
  enumerable: true,
  get: {
    address() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "address_get", arguments);
    }
  }.address,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "protocol_get", arguments);
    }
  }.protocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "port_get", arguments);
    }
  }.port,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "tcpType", {
  configurable: true,
  enumerable: true,
  get: {
    tcpType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "tcpType_get", arguments);
    }
  }.tcpType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "relatedAddress", {
  configurable: true,
  enumerable: true,
  get: {
    relatedAddress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "relatedAddress_get", arguments);
    }
  }.relatedAddress,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "relatedPort", {
  configurable: true,
  enumerable: true,
  get: {
    relatedPort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "relatedPort_get", arguments);
    }
  }.relatedPort,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "usernameFragment", {
  configurable: true,
  enumerable: true,
  get: {
    usernameFragment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "usernameFragment_get", arguments);
    }
  }.usernameFragment,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceCandidate"].prototype, "RTCIceCandidate", "toJSON", arguments);
    }
  }.toJSON
});