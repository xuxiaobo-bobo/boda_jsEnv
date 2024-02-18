// LargestContentfulPaint对象

bodaEnv.memory.globlProtoObj["LargestContentfulPaint"] = function LargestContentfulPaint() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LargestContentfulPaint 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"], "LargestContentfulPaint");
bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "renderTime", {
  configurable: true,
  enumerable: true,
  get: {
    renderTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "renderTime_get", arguments);
    }
  }.renderTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "loadTime", {
  configurable: true,
  enumerable: true,
  get: {
    loadTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "loadTime_get", arguments);
    }
  }.loadTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "element", {
  configurable: true,
  enumerable: true,
  get: {
    element() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "element_get", arguments);
    }
  }.element,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LargestContentfulPaint"].prototype, "LargestContentfulPaint", "toJSON", arguments);
    }
  }.toJSON
});