// IntersectionObserverEntry对象

bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"] = function IntersectionObserverEntry() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IntersectionObserverEntry 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"], "IntersectionObserverEntry");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "time", {
  configurable: true,
  enumerable: true,
  get: {
    time() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "time_get", arguments);
    }
  }.time,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "rootBounds", {
  configurable: true,
  enumerable: true,
  get: {
    rootBounds() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "rootBounds_get", arguments);
    }
  }.rootBounds,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "boundingClientRect", {
  configurable: true,
  enumerable: true,
  get: {
    boundingClientRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "boundingClientRect_get", arguments);
    }
  }.boundingClientRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "intersectionRect", {
  configurable: true,
  enumerable: true,
  get: {
    intersectionRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "intersectionRect_get", arguments);
    }
  }.intersectionRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "isIntersecting", {
  configurable: true,
  enumerable: true,
  get: {
    isIntersecting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "isIntersecting_get", arguments);
    }
  }.isIntersecting,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "isVisible", {
  configurable: true,
  enumerable: true,
  get: {
    isVisible() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "isVisible_get", arguments);
    }
  }.isVisible,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "intersectionRatio", {
  configurable: true,
  enumerable: true,
  get: {
    intersectionRatio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "intersectionRatio_get", arguments);
    }
  }.intersectionRatio,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IntersectionObserverEntry"].prototype, "IntersectionObserverEntry", "target_get", arguments);
    }
  }.target,
  set: undefined
});