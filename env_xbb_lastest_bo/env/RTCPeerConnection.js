// RTCPeerConnection对象

RTCPeerConnection = function RTCPeerConnection() {
  let arg = arguments[0];
  //debugger
  if (JSON.stringify_bo(arg).indexOf('stun:stun1.l.google.com:19302?transport=udp') != -1) {
    return bodavm.toolsFunc.throwError('DOMException', `Failed to construct 'RTCPeerConnection': 'stun:stun1.l.google.com:19302?transport=udp' is not a valid stun or turn URL.`);
  }
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCPeerConnection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCPeerConnection, "RTCPeerConnection");
RTCPeerConnection.prototype.__proto__ = EventTarget.prototype;
RTCPeerConnection.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RTCPeerConnection, "generateCertificate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateCertificate() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection, "RTCPeerConnection", "generateCertificate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "localDescription", {
  configurable: true,
  enumerable: true,
  get: function localDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "localDescription_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "currentLocalDescription", {
  configurable: true,
  enumerable: true,
  get: function currentLocalDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "currentLocalDescription_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "pendingLocalDescription", {
  configurable: true,
  enumerable: true,
  get: function pendingLocalDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "pendingLocalDescription_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "remoteDescription", {
  configurable: true,
  enumerable: true,
  get: function remoteDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "remoteDescription_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "currentRemoteDescription", {
  configurable: true,
  enumerable: true,
  get: function currentRemoteDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "currentRemoteDescription_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "pendingRemoteDescription", {
  configurable: true,
  enumerable: true,
  get: function pendingRemoteDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "pendingRemoteDescription_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "signalingState", {
  configurable: true,
  enumerable: true,
  get: function signalingState() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "signalingState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "iceGatheringState", {
  configurable: true,
  enumerable: true,
  get: function iceGatheringState() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "iceGatheringState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "iceConnectionState", {
  configurable: true,
  enumerable: true,
  get: function iceConnectionState() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "iceConnectionState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "connectionState", {
  configurable: true,
  enumerable: true,
  get: function connectionState() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "connectionState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "canTrickleIceCandidates", {
  configurable: true,
  enumerable: true,
  get: function canTrickleIceCandidates() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "canTrickleIceCandidates_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onnegotiationneeded", {
  configurable: true,
  enumerable: true,
  get: function onnegotiationneeded() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onnegotiationneeded_get", arguments);
  },
  set: function onnegotiationneeded() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onnegotiationneeded_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicecandidate", {
  configurable: true,
  enumerable: true,
  get: function onicecandidate() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidate_get", arguments);
  },
  set: function onicecandidate() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onsignalingstatechange", {
  configurable: true,
  enumerable: true,
  get: function onsignalingstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onsignalingstatechange_get", arguments);
  },
  set: function onsignalingstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onsignalingstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "oniceconnectionstatechange", {
  configurable: true,
  enumerable: true,
  get: function oniceconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "oniceconnectionstatechange_get", arguments);
  },
  set: function oniceconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "oniceconnectionstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onconnectionstatechange", {
  configurable: true,
  enumerable: true,
  get: function onconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onconnectionstatechange_get", arguments);
  },
  set: function onconnectionstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onconnectionstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicegatheringstatechange", {
  configurable: true,
  enumerable: true,
  get: function onicegatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicegatheringstatechange_get", arguments);
  },
  set: function onicegatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicegatheringstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicecandidateerror", {
  configurable: true,
  enumerable: true,
  get: function onicecandidateerror() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidateerror_get", arguments);
  },
  set: function onicecandidateerror() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onicecandidateerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "ontrack", {
  configurable: true,
  enumerable: true,
  get: function ontrack() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ontrack_get", arguments);
  },
  set: function ontrack() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ontrack_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "sctp", {
  configurable: true,
  enumerable: true,
  get: function sctp() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "sctp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "ondatachannel", {
  configurable: true,
  enumerable: true,
  get: function ondatachannel() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ondatachannel_get", arguments);
  },
  set: function ondatachannel() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "ondatachannel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onaddstream", {
  configurable: true,
  enumerable: true,
  get: function onaddstream() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onaddstream_get", arguments);
  },
  set: function onaddstream() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onaddstream_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onremovestream", {
  configurable: true,
  enumerable: true,
  get: function onremovestream() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onremovestream_get", arguments);
  },
  set: function onremovestream() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "onremovestream_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addIceCandidate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addIceCandidate() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addIceCandidate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addStream() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addStream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTrack() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addTrack", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addTransceiver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTransceiver() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "addTransceiver", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createAnswer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnswer() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createAnswer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createDTMFSender", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDTMFSender() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createDTMFSender", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createDataChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDataChannel() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createDataChannel", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createOffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createOffer() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "createOffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConfiguration() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getConfiguration", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getLocalStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLocalStreams() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getLocalStreams", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getReceivers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getReceivers() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getReceivers", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getRemoteStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteStreams() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getRemoteStreams", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getSenders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSenders() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getSenders", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStats() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getStats", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getTransceivers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransceivers() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "getTransceivers", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "removeStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeStream() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "removeStream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "removeTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeTrack() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "removeTrack", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "restartIce", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function restartIce() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "restartIce", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setConfiguration() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "setConfiguration", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setLocalDescription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setLocalDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "setLocalDescription", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setRemoteDescription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRemoteDescription() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnection", "setRemoteDescription", arguments);
  }
});