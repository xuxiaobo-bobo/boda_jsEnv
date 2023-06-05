// RTCIceTransport对象

bodavm.memory.globalobj['RTCIceTransport'] = function RTCIceTransport() {
  console.log_copy('RTCIceTransport 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCIceTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCIceTransport'], "RTCIceTransport");
bodavm.memory.globalobj['RTCIceTransport'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RTCIceTransport'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RTCIceTransport', "role", {
  configurable: true,
  enumerable: true,
  get: function role() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "role_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "gatheringState", {
  configurable: true,
  enumerable: true,
  get: function gatheringState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "gatheringState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "onstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "ongatheringstatechange", {
  configurable: true,
  enumerable: true,
  get: function ongatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "ongatheringstatechange_get", arguments);
  },
  set: function ongatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "ongatheringstatechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "onselectedcandidatepairchange", {
  configurable: true,
  enumerable: true,
  get: function onselectedcandidatepairchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "onselectedcandidatepairchange_get", arguments);
  },
  set: function onselectedcandidatepairchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "onselectedcandidatepairchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "getLocalCandidates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLocalCandidates() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "getLocalCandidates", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "getLocalParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLocalParameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "getLocalParameters", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "getRemoteCandidates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteCandidates() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "getRemoteCandidates", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "getRemoteParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteParameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "getRemoteParameters", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCIceTransport', "getSelectedCandidatePair", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelectedCandidatePair() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCIceTransport'].prototype, "RTCIceTransport", "getSelectedCandidatePair", arguments);
  }
}, 'prototype');