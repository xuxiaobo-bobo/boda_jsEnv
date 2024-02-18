// MessagePort对象

bodaEnv.memory.globlProtoObj["MessagePort"] = function MessagePort() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MessagePort 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MessagePort"], "MessagePort");
bodaEnv.memory.globlProtoObj["MessagePort"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MessagePort"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "onmessageerror", {
  configurable: true,
  enumerable: true,
  get: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "onmessageerror_get", arguments);
    }
  }.onmessageerror,
  set: {
    onmessageerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "onmessageerror_set", arguments);
    }
  }.onmessageerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    postMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "postMessage", arguments);
    }
  }.postMessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessagePort"].prototype, "MessagePort", "start", arguments);
    }
  }.start
});