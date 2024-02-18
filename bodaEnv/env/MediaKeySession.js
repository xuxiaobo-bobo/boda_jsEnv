// MediaKeySession对象

bodaEnv.memory.globlProtoObj["MediaKeySession"] = function MediaKeySession() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaKeySession 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaKeySession"], "MediaKeySession");
bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaKeySession"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "sessionId", {
  configurable: true,
  enumerable: true,
  get: {
    sessionId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "sessionId_get", arguments);
    }
  }.sessionId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "expiration", {
  configurable: true,
  enumerable: true,
  get: {
    expiration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "expiration_get", arguments);
    }
  }.expiration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "closed_get", arguments);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "keyStatuses", {
  configurable: true,
  enumerable: true,
  get: {
    keyStatuses() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "keyStatuses_get", arguments);
    }
  }.keyStatuses,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "onkeystatuseschange", {
  configurable: true,
  enumerable: true,
  get: {
    onkeystatuseschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "onkeystatuseschange_get", arguments);
    }
  }.onkeystatuseschange,
  set: {
    onkeystatuseschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "onkeystatuseschange_set", arguments);
    }
  }.onkeystatuseschange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "generateRequest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    generateRequest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "generateRequest", arguments);
    }
  }.generateRequest
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    load() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "load", arguments);
    }
  }.load
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    update() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySession"].prototype, "MediaKeySession", "update", arguments);
    }
  }.update
});