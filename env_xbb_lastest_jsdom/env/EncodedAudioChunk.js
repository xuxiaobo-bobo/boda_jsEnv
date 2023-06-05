// EncodedAudioChunk对象

bodavm.memory.globalobj['EncodedAudioChunk'] = function EncodedAudioChunk() {
  console.log_copy('EncodedAudioChunk 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof EncodedAudioChunk)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'EncodedAudioChunk': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EncodedAudioChunk'], "EncodedAudioChunk");
bodavm.toolsFunc.defineProperty('EncodedAudioChunk', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedAudioChunk'].prototype, "EncodedAudioChunk", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedAudioChunk', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedAudioChunk'].prototype, "EncodedAudioChunk", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedAudioChunk', "byteLength", {
  configurable: true,
  enumerable: true,
  get: function byteLength() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedAudioChunk'].prototype, "EncodedAudioChunk", "byteLength_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedAudioChunk', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedAudioChunk'].prototype, "EncodedAudioChunk", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EncodedAudioChunk', "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EncodedAudioChunk'].prototype, "EncodedAudioChunk", "copyTo", arguments);
  }
}, 'prototype');