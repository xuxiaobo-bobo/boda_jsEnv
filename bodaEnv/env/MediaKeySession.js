// MediaKeySesboda对象

bodaEnv.memory.globlProtoObj["MediaKeySesboda"] = function MediaKeySesboda() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaKeySesboda 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaKeySesboda"], "MediaKeySesboda");
bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaKeySesboda"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "sesbodaId", {
  configurable: true,
  enumerable: true,
  get: {
    sesbodaId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "sesbodaId_get", arguments);
    }
  }.sesbodaId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "expiration", {
  configurable: true,
  enumerable: true,
  get: {
    expiration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "expiration_get", arguments);
    }
  }.expiration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "closed_get", arguments);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "keyStatuses", {
  configurable: true,
  enumerable: true,
  get: {
    keyStatuses() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "keyStatuses_get", arguments);
    }
  }.keyStatuses,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "onkeystatuseschange", {
  configurable: true,
  enumerable: true,
  get: {
    onkeystatuseschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "onkeystatuseschange_get", arguments);
    }
  }.onkeystatuseschange,
  set: {
    onkeystatuseschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "onkeystatuseschange_set", arguments);
    }
  }.onkeystatuseschange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "generateRequest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    generateRequest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "generateRequest", arguments);
    }
  }.generateRequest
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    load() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "load", arguments);
    }
  }.load
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    update() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySesboda"].prototype, "MediaKeySesboda", "update", arguments);
    }
  }.update
});