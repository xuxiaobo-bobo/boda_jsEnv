// TransformStreamDefaultController对象

bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"] = function TransformStreamDefaultController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TransformStreamDefaultController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"], "TransformStreamDefaultController");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: {
    desiredSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "TransformStreamDefaultController", "desiredSize_get", arguments);
    }
  }.desiredSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enqueue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "TransformStreamDefaultController", "enqueue", arguments);
    }
  }.enqueue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "TransformStreamDefaultController", "error", arguments);
    }
  }.error
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    terminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TransformStreamDefaultController"].prototype, "TransformStreamDefaultController", "terminate", arguments);
    }
  }.terminate
});