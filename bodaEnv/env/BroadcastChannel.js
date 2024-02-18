// BroadcastChannel对象

bodaEnv.memory.globlProtoObj["BroadcastChannel"] = function BroadcastChannel() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BroadcastChannel 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BroadcastChannel"], "BroadcastChannel");
bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["BroadcastChannel"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "onmessageerror_get", arguments);
    }
  }.onmessageerror,
  set: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "onmessageerror_set", arguments);
    }
  }.onmessageerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    postMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BroadcastChannel"].prototype, "BroadcastChannel", "postMessage", arguments);
    }
  }.postMessage
});