// VideoDecoder对象

bodaEnv.memory.globlProtoObj["VideoDecoder"] = function VideoDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VideoDecoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VideoDecoder"], "VideoDecoder");
bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["VideoDecoder"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"], "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isConfigSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageDecoder"], "VideoDecoder", "isConfigSupported", arguments);
    }
  }.isConfigSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "decodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: {
    decodeQueueSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "decodeQueueSize_get", arguments);
    }
  }.decodeQueueSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    configure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "configure", arguments);
    }
  }.configure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "decode", arguments);
    }
  }.decode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flush() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "flush", arguments);
    }
  }.flush
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "ondequeue_get", arguments);
    }
  }.ondequeue,
  set: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"].prototype, "VideoDecoder", "ondequeue_set", arguments);
    }
  }.ondequeue
});