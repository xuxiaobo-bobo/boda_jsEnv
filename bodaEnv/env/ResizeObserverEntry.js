// ResizeObserverEntry对象

bodaEnv.memory.globlProtoObj["ResizeObserverEntry"] = function ResizeObserverEntry() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ResizeObserverEntry 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ResizeObserverEntry"], "ResizeObserverEntry");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "ResizeObserverEntry", "target_get", arguments);
    }
  }.target,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "contentRect", {
  configurable: true,
  enumerable: true,
  get: {
    contentRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "ResizeObserverEntry", "contentRect_get", arguments);
    }
  }.contentRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "contentBoxSize", {
  configurable: true,
  enumerable: true,
  get: {
    contentBoxSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "ResizeObserverEntry", "contentBoxSize_get", arguments);
    }
  }.contentBoxSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "borderBoxSize", {
  configurable: true,
  enumerable: true,
  get: {
    borderBoxSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "ResizeObserverEntry", "borderBoxSize_get", arguments);
    }
  }.borderBoxSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "devicePixelContentBoxSize", {
  configurable: true,
  enumerable: true,
  get: {
    devicePixelContentBoxSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverEntry"].prototype, "ResizeObserverEntry", "devicePixelContentBoxSize_get", arguments);
    }
  }.devicePixelContentBoxSize,
  set: undefined
});