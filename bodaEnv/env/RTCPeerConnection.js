// RTCPeerConnection对象

bodaEnv.memory.globlProtoObj["RTCPeerConnection"] = function RTCPeerConnection() {
  let arg = arguments[0];
  //debugger;
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCPeerConnection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCPeerConnection"], "RTCPeerConnection");
bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RTCPeerConnection"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"], "generateCertificate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    generateCertificate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnectionIceErrorEvent"], "RTCPeerConnection", "generateCertificate", arguments);
    }
  }.generateCertificate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "localDescription", {
  configurable: true,
  enumerable: true,
  get: {
    localDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "localDescription_get", arguments);
    }
  }.localDescription,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "currentLocalDescription", {
  configurable: true,
  enumerable: true,
  get: {
    currentLocalDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "currentLocalDescription_get", arguments);
    }
  }.currentLocalDescription,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "pendingLocalDescription", {
  configurable: true,
  enumerable: true,
  get: {
    pendingLocalDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "pendingLocalDescription_get", arguments);
    }
  }.pendingLocalDescription,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "remoteDescription", {
  configurable: true,
  enumerable: true,
  get: {
    remoteDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "remoteDescription_get", arguments);
    }
  }.remoteDescription,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "currentRemoteDescription", {
  configurable: true,
  enumerable: true,
  get: {
    currentRemoteDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "currentRemoteDescription_get", arguments);
    }
  }.currentRemoteDescription,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "pendingRemoteDescription", {
  configurable: true,
  enumerable: true,
  get: {
    pendingRemoteDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "pendingRemoteDescription_get", arguments);
    }
  }.pendingRemoteDescription,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "signalingState", {
  configurable: true,
  enumerable: true,
  get: {
    signalingState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "signalingState_get", arguments);
    }
  }.signalingState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "iceGatheringState", {
  configurable: true,
  enumerable: true,
  get: {
    iceGatheringState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "iceGatheringState_get", arguments);
    }
  }.iceGatheringState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "iceConnectionState", {
  configurable: true,
  enumerable: true,
  get: {
    iceConnectionState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "iceConnectionState_get", arguments);
    }
  }.iceConnectionState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "connectionState", {
  configurable: true,
  enumerable: true,
  get: {
    connectionState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "connectionState_get", arguments);
    }
  }.connectionState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "canTrickleIceCandidates", {
  configurable: true,
  enumerable: true,
  get: {
    canTrickleIceCandidates() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "canTrickleIceCandidates_get", arguments);
    }
  }.canTrickleIceCandidates,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onnegotiationneeded", {
  configurable: true,
  enumerable: true,
  get: {
    onnegotiationneeded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onnegotiationneeded_get", arguments);
    }
  }.onnegotiationneeded,
  set: {
    onnegotiationneeded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onnegotiationneeded_set", arguments);
    }
  }.onnegotiationneeded
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onicecandidate", {
  configurable: true,
  enumerable: true,
  get: {
    onicecandidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onicecandidate_get", arguments);
    }
  }.onicecandidate,
  set: {
    onicecandidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onicecandidate_set", arguments);
    }
  }.onicecandidate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onsignalingstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onsignalingstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onsignalingstatechange_get", arguments);
    }
  }.onsignalingstatechange,
  set: {
    onsignalingstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onsignalingstatechange_set", arguments);
    }
  }.onsignalingstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "oniceconnectionstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    oniceconnectionstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "oniceconnectionstatechange_get", arguments);
    }
  }.oniceconnectionstatechange,
  set: {
    oniceconnectionstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "oniceconnectionstatechange_set", arguments);
    }
  }.oniceconnectionstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onconnectionstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onconnectionstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onconnectionstatechange_get", arguments);
    }
  }.onconnectionstatechange,
  set: {
    onconnectionstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onconnectionstatechange_set", arguments);
    }
  }.onconnectionstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onicegatheringstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onicegatheringstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onicegatheringstatechange_get", arguments);
    }
  }.onicegatheringstatechange,
  set: {
    onicegatheringstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onicegatheringstatechange_set", arguments);
    }
  }.onicegatheringstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onicecandidateerror", {
  configurable: true,
  enumerable: true,
  get: {
    onicecandidateerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onicecandidateerror_get", arguments);
    }
  }.onicecandidateerror,
  set: {
    onicecandidateerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onicecandidateerror_set", arguments);
    }
  }.onicecandidateerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "ontrack", {
  configurable: true,
  enumerable: true,
  get: {
    ontrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "ontrack_get", arguments);
    }
  }.ontrack,
  set: {
    ontrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "ontrack_set", arguments);
    }
  }.ontrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "sctp", {
  configurable: true,
  enumerable: true,
  get: {
    sctp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "sctp_get", arguments);
    }
  }.sctp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "ondatachannel", {
  configurable: true,
  enumerable: true,
  get: {
    ondatachannel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "ondatachannel_get", arguments);
    }
  }.ondatachannel,
  set: {
    ondatachannel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "ondatachannel_set", arguments);
    }
  }.ondatachannel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onaddstream", {
  configurable: true,
  enumerable: true,
  get: {
    onaddstream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onaddstream_get", arguments);
    }
  }.onaddstream,
  set: {
    onaddstream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onaddstream_set", arguments);
    }
  }.onaddstream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "onremovestream", {
  configurable: true,
  enumerable: true,
  get: {
    onremovestream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onremovestream_get", arguments);
    }
  }.onremovestream,
  set: {
    onremovestream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "onremovestream_set", arguments);
    }
  }.onremovestream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "addIceCandidate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addIceCandidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "addIceCandidate", arguments);
    }
  }.addIceCandidate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "addStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "addStream", arguments);
    }
  }.addStream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "addTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "addTrack", arguments);
    }
  }.addTrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "addTransceiver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addTransceiver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "addTransceiver", arguments);
    }
  }.addTransceiver
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "createAnswer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createAnswer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "createAnswer", arguments);
    }
  }.createAnswer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "createDTMFSender", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDTMFSender() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "createDTMFSender", arguments);
    }
  }.createDTMFSender
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "createDataChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDataChannel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "createDataChannel", arguments);
    }
  }.createDataChannel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "createOffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createOffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "createOffer", arguments);
    }
  }.createOffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getConfiguration", arguments);
    }
  }.getConfiguration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getLocalStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getLocalStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getLocalStreams", arguments);
    }
  }.getLocalStreams
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getReceivers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getReceivers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getReceivers", arguments);
    }
  }.getReceivers
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getRemoteStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRemoteStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getRemoteStreams", arguments);
    }
  }.getRemoteStreams
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getSenders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSenders() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getSenders", arguments);
    }
  }.getSenders
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getStats() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getStats", arguments);
    }
  }.getStats
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "getTransceivers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTransceivers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "getTransceivers", arguments);
    }
  }.getTransceivers
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "removeStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "removeStream", arguments);
    }
  }.removeStream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "removeTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "removeTrack", arguments);
    }
  }.removeTrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "restartIce", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    restartIce() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "restartIce", arguments);
    }
  }.restartIce
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "setConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "setConfiguration", arguments);
    }
  }.setConfiguration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "setLocalDescription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setLocalDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "setLocalDescription", arguments);
    }
  }.setLocalDescription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "setRemoteDescription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setRemoteDescription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCPeerConnection"].prototype, "RTCPeerConnection", "setRemoteDescription", arguments);
    }
  }.setRemoteDescription
});