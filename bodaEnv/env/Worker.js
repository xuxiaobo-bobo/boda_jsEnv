// Worker对象

bodaEnv.memory.globlProtoObj["Worker"] = function Worker() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Worker 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Worker"], "Worker");
bodaEnv.memory.globlProtoObj["Worker"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Worker"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Worker"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worker"].prototype, "Worker", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worker"].prototype, "Worker", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Worker"].prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    postMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worker"].prototype, "Worker", "postMessage", arguments);
    }
  }.postMessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Worker"].prototype, "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    terminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worker"].prototype, "Worker", "terminate", arguments);
    }
  }.terminate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Worker"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worker"].prototype, "Worker", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worker"].prototype, "Worker", "onerror_set", arguments);
    }
  }.onerror
});