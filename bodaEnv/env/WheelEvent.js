// WheelEvent对象

bodaEnv.memory.globlProtoObj["WheelEvent"] = function WheelEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WheelEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WheelEvent"], "WheelEvent");
bodaEnv.memory.globlProtoObj["WheelEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MouseEvent"].prototype;
bodaEnv.memory.globlProtoObj["WheelEvent"].__proto__ = bodaEnv.memory.globlProtoObj["MouseEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"], "DOM_DELTA_PIXEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"], "DOM_DELTA_LINE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"], "DOM_DELTA_PAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "deltaX", {
  configurable: true,
  enumerable: true,
  get: {
    deltaX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "deltaX_get", arguments);
    }
  }.deltaX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "deltaY", {
  configurable: true,
  enumerable: true,
  get: {
    deltaY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "deltaY_get", arguments);
    }
  }.deltaY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "deltaZ", {
  configurable: true,
  enumerable: true,
  get: {
    deltaZ() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "deltaZ_get", arguments);
    }
  }.deltaZ,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "deltaMode", {
  configurable: true,
  enumerable: true,
  get: {
    deltaMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "deltaMode_get", arguments);
    }
  }.deltaMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "wheelDeltaX", {
  configurable: true,
  enumerable: true,
  get: {
    wheelDeltaX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "wheelDeltaX_get", arguments);
    }
  }.wheelDeltaX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "wheelDeltaY", {
  configurable: true,
  enumerable: true,
  get: {
    wheelDeltaY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "wheelDeltaY_get", arguments);
    }
  }.wheelDeltaY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "wheelDelta", {
  configurable: true,
  enumerable: true,
  get: {
    wheelDelta() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "WheelEvent", "wheelDelta_get", arguments);
    }
  }.wheelDelta,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "DOM_DELTA_PIXEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "DOM_DELTA_LINE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WheelEvent"].prototype, "DOM_DELTA_PAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});