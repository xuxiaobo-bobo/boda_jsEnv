// AudioDecoder对象

bodavm.memory.globalobj['AudioDecoder'] = function AudioDecoder() {
  console.log_copy('AudioDecoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioDecoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioDecoder': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioDecoder'], "AudioDecoder");
bodavm.memory.globalobj['AudioDecoder'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['AudioDecoder'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('AudioDecoder', "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].undefined, "AudioDecoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('AudioDecoder', "decodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function decodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "decodeQueueSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "configure", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "decode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "flush", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioDecoder', "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioDecoder'].prototype, "AudioDecoder", "ondequeue_set", arguments);
  }
}, 'prototype');