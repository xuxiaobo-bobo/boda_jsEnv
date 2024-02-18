// ServiceWorker对象

bodaEnv.memory.globlProtoObj["ServiceWorker"] = function ServiceWorker() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ServiceWorker 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ServiceWorker"], "ServiceWorker");
bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["ServiceWorker"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "scriptURL", {
  configurable: true,
  enumerable: true,
  get: {
    scriptURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "scriptURL_get", arguments);
    }
  }.scriptURL,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "onstatechange_get", arguments);
    }
  }.onstatechange,
  set: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "onstatechange_set", arguments);
    }
  }.onstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    postMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "postMessage", arguments);
    }
  }.postMessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ServiceWorker"].prototype, "ServiceWorker", "onerror_set", arguments);
    }
  }.onerror
});