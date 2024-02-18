// IntersectionObserver对象

bodaEnv.memory.globlProtoObj["IntersectionObserver"] = function IntersectionObserver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IntersectionObserver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IntersectionObserver"], "IntersectionObserver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "root", {
  configurable: true,
  enumerable: true,
  get: {
    root() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "root_get", arguments);
    }
  }.root,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "rootMargin", {
  configurable: true,
  enumerable: true,
  get: {
    rootMargin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "rootMargin_get", arguments);
    }
  }.rootMargin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "thresholds", {
  configurable: true,
  enumerable: true,
  get: {
    thresholds() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "thresholds_get", arguments);
    }
  }.thresholds,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "delay", {
  configurable: true,
  enumerable: true,
  get: {
    delay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "delay_get", arguments);
    }
  }.delay,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "trackVisibility", {
  configurable: true,
  enumerable: true,
  get: {
    trackVisibility() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "trackVisibility_get", arguments);
    }
  }.trackVisibility,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "disconnect", arguments);
    }
  }.disconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    observe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "observe", arguments);
    }
  }.observe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    takeRecords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "takeRecords", arguments);
    }
  }.takeRecords
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "unobserve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unobserve() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserver"].prototype, "IntersectionObserver", "unobserve", arguments);
    }
  }.unobserve
});