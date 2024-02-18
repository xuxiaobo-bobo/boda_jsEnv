// WebTransport对象

bodaEnv.memory.globlProtoObj["WebTransport"] = function WebTransport() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebTransport 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebTransport"], "WebTransport");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "incomingUnidirectionalStreams", {
  configurable: true,
  enumerable: true,
  get: {
    incomingUnidirectionalStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "incomingUnidirectionalStreams_get", arguments);
    }
  }.incomingUnidirectionalStreams,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "incomingBidirectionalStreams", {
  configurable: true,
  enumerable: true,
  get: {
    incomingBidirectionalStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "incomingBidirectionalStreams_get", arguments);
    }
  }.incomingBidirectionalStreams,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "datagrams", {
  configurable: true,
  enumerable: true,
  get: {
    datagrams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "datagrams_get", arguments);
    }
  }.datagrams,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: {
    ready() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "ready_get", arguments);
    }
  }.ready,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "closed_get", arguments);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "createBidirectionalStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBidirectionalStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "createBidirectionalStream", arguments);
    }
  }.createBidirectionalStream
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "createUnidirectionalStream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createUnidirectionalStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebTransport"].prototype, "WebTransport", "createUnidirectionalStream", arguments);
    }
  }.createUnidirectionalStream
});