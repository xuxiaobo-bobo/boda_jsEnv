// TouchEvent对象

bodaEnv.memory.globlProtoObj["TouchEvent"] = function TouchEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TouchEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TouchEvent"], "TouchEvent");
bodaEnv.memory.globlProtoObj["TouchEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"].prototype;
bodaEnv.memory.globlProtoObj["TouchEvent"].__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "touches", {
  configurable: true,
  enumerable: true,
  get: {
    touches() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "touches_get", arguments);
    }
  }.touches,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "targetTouches", {
  configurable: true,
  enumerable: true,
  get: {
    targetTouches() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "targetTouches_get", arguments);
    }
  }.targetTouches,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "changedTouches", {
  configurable: true,
  enumerable: true,
  get: {
    changedTouches() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "changedTouches_get", arguments);
    }
  }.changedTouches,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "altKey", {
  configurable: true,
  enumerable: true,
  get: {
    altKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "altKey_get", arguments);
    }
  }.altKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "metaKey", {
  configurable: true,
  enumerable: true,
  get: {
    metaKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "metaKey_get", arguments);
    }
  }.metaKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: {
    ctrlKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "ctrlKey_get", arguments);
    }
  }.ctrlKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "shiftKey", {
  configurable: true,
  enumerable: true,
  get: {
    shiftKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TouchEvent"].prototype, "TouchEvent", "shiftKey_get", arguments);
    }
  }.shiftKey,
  set: undefined
});