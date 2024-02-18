// UIEvent对象

bodaEnv.memory.globlProtoObj["UIEvent"] = function UIEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('UIEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["UIEvent"], "UIEvent");
bodaEnv.memory.globlProtoObj["UIEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["UIEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "view", {
  configurable: true,
  enumerable: true,
  get: {
    view() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "UIEvent", "view_get", arguments);
    }
  }.view,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: {
    detail() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "UIEvent", "detail_get", arguments);
    }
  }.detail,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "sourceCapabilities", {
  configurable: true,
  enumerable: true,
  get: {
    sourceCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "UIEvent", "sourceCapabilities_get", arguments);
    }
  }.sourceCapabilities,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "which", {
  configurable: true,
  enumerable: true,
  get: {
    which() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "UIEvent", "which_get", arguments);
    }
  }.which,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "initUIEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initUIEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UIEvent"].prototype, "UIEvent", "initUIEvent", arguments);
    }
  }.initUIEvent
});