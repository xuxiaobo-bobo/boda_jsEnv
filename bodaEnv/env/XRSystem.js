// XRSystem对象

bodaEnv.memory.globlProtoObj["XRSystem"] = function XRSystem() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRSystem 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRSystem"], "XRSystem");
bodaEnv.memory.globlProtoObj["XRSystem"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["XRSystem"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "ondevicechange", {
  configurable: true,
  enumerable: true,
  get: {
    ondevicechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "XRSystem", "ondevicechange_get", arguments);
    }
  }.ondevicechange,
  set: {
    ondevicechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "XRSystem", "ondevicechange_set", arguments);
    }
  }.ondevicechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "isSesbodaSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isSesbodaSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "XRSystem", "isSesbodaSupported", arguments);
    }
  }.isSesbodaSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "requestSesboda", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestSesboda() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "XRSystem", "requestSesboda", arguments);
    }
  }.requestSesboda
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "supportsSesboda", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    supportsSesboda() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSystem"].prototype, "XRSystem", "supportsSesboda", arguments);
    }
  }.supportsSesboda
});