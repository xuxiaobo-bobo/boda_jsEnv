// RTCEncodedAudioFrame对象

bodavm.memory.globalobj['RTCEncodedAudioFrame'] = function RTCEncodedAudioFrame() {
  console.log_copy('RTCEncodedAudioFrame 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCEncodedAudioFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCEncodedAudioFrame'], "RTCEncodedAudioFrame");
bodavm.toolsFunc.defineProperty('RTCEncodedAudioFrame', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedAudioFrame'].prototype, "RTCEncodedAudioFrame", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedAudioFrame', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedAudioFrame'].prototype, "RTCEncodedAudioFrame", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedAudioFrame'].prototype, "RTCEncodedAudioFrame", "data_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedAudioFrame', "getMetadata", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getMetadata() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedAudioFrame'].prototype, "RTCEncodedAudioFrame", "getMetadata", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCEncodedAudioFrame', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCEncodedAudioFrame'].prototype, "RTCEncodedAudioFrame", "toString", arguments);
  }
}, 'prototype');