// RTCIceTransport对象

bodaEnv.memory.globlProtoObj["RTCIceTransport"] = function RTCIceTransport() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCIceTransport 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCIceTransport"], "RTCIceTransport");
bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RTCIceTransport"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "role", {
  configurable: true,
  enumerable: true,
  get: {
    role() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "role_get", arguments);
    }
  }.role,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "gatheringState", {
  configurable: true,
  enumerable: true,
  get: {
    gatheringState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "gatheringState_get", arguments);
    }
  }.gatheringState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "onstatechange_get", arguments);
    }
  }.onstatechange,
  set: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "onstatechange_set", arguments);
    }
  }.onstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "ongatheringstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    ongatheringstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "ongatheringstatechange_get", arguments);
    }
  }.ongatheringstatechange,
  set: {
    ongatheringstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "ongatheringstatechange_set", arguments);
    }
  }.ongatheringstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "onselectedcandidatepairchange", {
  configurable: true,
  enumerable: true,
  get: {
    onselectedcandidatepairchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "onselectedcandidatepairchange_get", arguments);
    }
  }.onselectedcandidatepairchange,
  set: {
    onselectedcandidatepairchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "onselectedcandidatepairchange_set", arguments);
    }
  }.onselectedcandidatepairchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "getLocalCandidates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getLocalCandidates() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "getLocalCandidates", arguments);
    }
  }.getLocalCandidates
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "getLocalParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getLocalParameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "getLocalParameters", arguments);
    }
  }.getLocalParameters
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "getRemoteCandidates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRemoteCandidates() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "getRemoteCandidates", arguments);
    }
  }.getRemoteCandidates
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "getRemoteParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRemoteParameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "getRemoteParameters", arguments);
    }
  }.getRemoteParameters
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "getSelectedCandidatePair", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSelectedCandidatePair() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCIceTransport"].prototype, "RTCIceTransport", "getSelectedCandidatePair", arguments);
    }
  }.getSelectedCandidatePair
});