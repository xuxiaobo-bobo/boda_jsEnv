// PerformanceNavigation对象

bodaEnv.memory.globlProtoObj["PerformanceNavigation"] = function PerformanceNavigation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceNavigation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceNavigation"], "PerformanceNavigation");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"], "TYPE_NAVIGATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"], "TYPE_RELOAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"], "TYPE_BACK_FORWARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"], "TYPE_RESERVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 255
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "PerformanceNavigation", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "redirectCount", {
  configurable: true,
  enumerable: true,
  get: {
    redirectCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "PerformanceNavigation", "redirectCount_get", arguments);
    }
  }.redirectCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "TYPE_NAVIGATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "TYPE_RELOAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "TYPE_BACK_FORWARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "TYPE_RESERVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 255
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigation"].prototype, "PerformanceNavigation", "toJSON", arguments);
    }
  }.toJSON
});