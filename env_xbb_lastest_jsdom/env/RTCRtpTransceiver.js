// RTCRtpTransceiver对象

bodavm.memory.globalobj['RTCRtpTransceiver'] = function RTCRtpTransceiver() {
  console.log_copy('RTCRtpTransceiver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCRtpTransceiver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCRtpTransceiver'], "RTCRtpTransceiver");
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "mid", {
  configurable: true,
  enumerable: true,
  get: function mid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "mid_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "sender", {
  configurable: true,
  enumerable: true,
  get: function sender() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "sender_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "receiver", {
  configurable: true,
  enumerable: true,
  get: function receiver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "receiver_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "stopped", {
  configurable: true,
  enumerable: true,
  get: function stopped() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "stopped_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "direction_get", arguments);
  },
  set: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "direction_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "currentDirection", {
  configurable: true,
  enumerable: true,
  get: function currentDirection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "currentDirection_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "setCodecPreferences", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCodecPreferences() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "setCodecPreferences", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpTransceiver', "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpTransceiver'].prototype, "RTCRtpTransceiver", "stop", arguments);
  }
}, 'prototype');