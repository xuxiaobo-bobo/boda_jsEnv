// LayoutShiftAttribution对象

bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"] = function LayoutShiftAttribution() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LayoutShiftAttribution 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"], "LayoutShiftAttribution");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "node", {
  configurable: true,
  enumerable: true,
  get: {
    node() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "LayoutShiftAttribution", "node_get", arguments);
    }
  }.node,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "previousRect", {
  configurable: true,
  enumerable: true,
  get: {
    previousRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "LayoutShiftAttribution", "previousRect_get", arguments);
    }
  }.previousRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "currentRect", {
  configurable: true,
  enumerable: true,
  get: {
    currentRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "LayoutShiftAttribution", "currentRect_get", arguments);
    }
  }.currentRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShiftAttribution"].prototype, "LayoutShiftAttribution", "toJSON", arguments);
    }
  }.toJSON
});