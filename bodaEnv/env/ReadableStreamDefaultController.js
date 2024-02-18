// ReadableStreamDefaultController对象

bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"] = function ReadableStreamDefaultController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReadableStreamDefaultController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"], "ReadableStreamDefaultController");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: {
    desiredSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "ReadableStreamDefaultController", "desiredSize_get", arguments);
    }
  }.desiredSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "ReadableStreamDefaultController", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enqueue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "ReadableStreamDefaultController", "enqueue", arguments);
    }
  }.enqueue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultController"].prototype, "ReadableStreamDefaultController", "error", arguments);
    }
  }.error
});