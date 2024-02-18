// AudioEncoder对象

bodaEnv.memory.globlProtoObj["AudioEncoder"] = function AudioEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioEncoder"], "AudioEncoder");
bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["AudioEncoder"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"], "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isConfigSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDecoder"], "AudioEncoder", "isConfigSupported", arguments);
    }
  }.isConfigSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "encodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: {
    encodeQueueSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "encodeQueueSize_get", arguments);
    }
  }.encodeQueueSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    configure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "configure", arguments);
    }
  }.configure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    encode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "encode", arguments);
    }
  }.encode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flush() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "flush", arguments);
    }
  }.flush
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "ondequeue_get", arguments);
    }
  }.ondequeue,
  set: {
    ondequeue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioEncoder"].prototype, "AudioEncoder", "ondequeue_set", arguments);
    }
  }.ondequeue
});