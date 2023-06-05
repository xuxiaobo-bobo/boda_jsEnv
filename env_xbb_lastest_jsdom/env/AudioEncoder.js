// AudioEncoder对象

bodavm.memory.globalobj['AudioEncoder'] = function AudioEncoder() {
  console.log_copy('AudioEncoder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioEncoder': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioEncoder'], "AudioEncoder");
bodavm.memory.globalobj['AudioEncoder'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['AudioEncoder'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('AudioEncoder', "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].undefined, "AudioEncoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('AudioEncoder', "encodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function encodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "encodeQueueSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "configure", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "encode", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "flush", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "reset", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioEncoder', "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioEncoder'].prototype, "AudioEncoder", "ondequeue_set", arguments);
  }
}, 'prototype');