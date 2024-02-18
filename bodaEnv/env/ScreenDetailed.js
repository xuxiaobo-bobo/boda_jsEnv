// ScreenDetailed对象

bodaEnv.memory.globlProtoObj["ScreenDetailed"] = function ScreenDetailed() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ScreenDetailed 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ScreenDetailed"], "ScreenDetailed");
bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Screen"].prototype;
bodaEnv.memory.globlProtoObj["ScreenDetailed"].__proto__ = bodaEnv.memory.globlProtoObj["Screen"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "left", {
  configurable: true,
  enumerable: true,
  get: {
    left() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "ScreenDetailed", "left_get", arguments);
    }
  }.left,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "top", {
  configurable: true,
  enumerable: true,
  get: {
    top() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "ScreenDetailed", "top_get", arguments);
    }
  }.top,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "isPrimary", {
  configurable: true,
  enumerable: true,
  get: {
    isPrimary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "ScreenDetailed", "isPrimary_get", arguments);
    }
  }.isPrimary,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "isInternal", {
  configurable: true,
  enumerable: true,
  get: {
    isInternal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "ScreenDetailed", "isInternal_get", arguments);
    }
  }.isInternal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "devicePixelRatio", {
  configurable: true,
  enumerable: true,
  get: {
    devicePixelRatio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "ScreenDetailed", "devicePixelRatio_get", arguments);
    }
  }.devicePixelRatio,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScreenDetailed"].prototype, "ScreenDetailed", "label_get", arguments);
    }
  }.label,
  set: undefined
});