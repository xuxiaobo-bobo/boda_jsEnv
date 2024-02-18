// ReadableByteStreamController对象

bodaEnv.memory.globlProtoObj["ReadableByteStreamController"] = function ReadableByteStreamController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReadableByteStreamController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReadableByteStreamController"], "ReadableByteStreamController");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "byobRequest", {
  configurable: true,
  enumerable: true,
  get: {
    byobRequest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "ReadableByteStreamController", "byobRequest_get", arguments);
    }
  }.byobRequest,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: {
    desiredSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "ReadableByteStreamController", "desiredSize_get", arguments);
    }
  }.desiredSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "ReadableByteStreamController", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enqueue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "ReadableByteStreamController", "enqueue", arguments);
    }
  }.enqueue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableByteStreamController"].prototype, "ReadableByteStreamController", "error", arguments);
    }
  }.error
});