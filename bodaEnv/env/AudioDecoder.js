// AudioDecoder对象

bodaEnv.memory.globlProtoObj["AudioDecoder"] = function AudioDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioDecoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioDecoder"], "AudioDecoder");
bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["AudioDecoder"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"], "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isConfigSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoFrame"], "AudioDecoder", "isConfigSupported", arguments);
    }
  }.isConfigSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "decodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: {
    decodeQueueSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "decodeQueueSize_get", arguments);
    }
  }.decodeQueueSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    configure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "configure", arguments);
    }
  }.configure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "decode", arguments);
    }
  }.decode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flush() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "flush", arguments);
    }
  }.flush
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "ondequeue_get", arguments);
    }
  }.ondequeue,
  set: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"].prototype, "AudioDecoder", "ondequeue_set", arguments);
    }
  }.ondequeue
});