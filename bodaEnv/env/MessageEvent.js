// MessageEvent对象

bodaEnv.memory.globlProtoObj["MessageEvent"] = function MessageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MessageEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MessageEvent"], "MessageEvent");
bodaEnv.memory.globlProtoObj["MessageEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MessageEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "origin_get", arguments);
    }
  }.origin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "lastEventId", {
  configurable: true,
  enumerable: true,
  get: {
    lastEventId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "lastEventId_get", arguments);
    }
  }.lastEventId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "source", {
  configurable: true,
  enumerable: true,
  get: {
    source() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "source_get", arguments);
    }
  }.source,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "ports", {
  configurable: true,
  enumerable: true,
  get: {
    ports() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "ports_get", arguments);
    }
  }.ports,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "userActivation", {
  configurable: true,
  enumerable: true,
  get: {
    userActivation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "userActivation_get", arguments);
    }
  }.userActivation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "initMessageEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initMessageEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageEvent"].prototype, "MessageEvent", "initMessageEvent", arguments);
    }
  }.initMessageEvent
});