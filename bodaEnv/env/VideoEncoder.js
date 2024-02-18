// VideoEncoder对象

bodaEnv.memory.globlProtoObj["VideoEncoder"] = function VideoEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('VideoEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["VideoEncoder"], "VideoEncoder");
bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["VideoEncoder"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"], "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isConfigSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoDecoder"], "VideoEncoder", "isConfigSupported", arguments);
    }
  }.isConfigSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "encodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: {
    encodeQueueSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "encodeQueueSize_get", arguments);
    }
  }.encodeQueueSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    configure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "configure", arguments);
    }
  }.configure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    encode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "encode", arguments);
    }
  }.encode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flush() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "flush", arguments);
    }
  }.flush
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "ondequeue_get", arguments);
    }
  }.ondequeue,
  set: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["VideoEncoder"].prototype, "VideoEncoder", "ondequeue_set", arguments);
    }
  }.ondequeue
});