// PerformanceElementTiming对象

bodaEnv.memory.globlProtoObj["PerformanceElementTiming"] = function PerformanceElementTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceElementTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"], "PerformanceElementTiming");
bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "renderTime", {
  configurable: true,
  enumerable: true,
  get: {
    renderTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "renderTime_get", arguments);
    }
  }.renderTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "loadTime", {
  configurable: true,
  enumerable: true,
  get: {
    loadTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "loadTime_get", arguments);
    }
  }.loadTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "intersectionRect", {
  configurable: true,
  enumerable: true,
  get: {
    intersectionRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "intersectionRect_get", arguments);
    }
  }.intersectionRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "identifier", {
  configurable: true,
  enumerable: true,
  get: {
    identifier() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "identifier_get", arguments);
    }
  }.identifier,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: {
    naturalWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "naturalWidth_get", arguments);
    }
  }.naturalWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: {
    naturalHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "naturalHeight_get", arguments);
    }
  }.naturalHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "element", {
  configurable: true,
  enumerable: true,
  get: {
    element() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "element_get", arguments);
    }
  }.element,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceElementTiming"].prototype, "PerformanceElementTiming", "toJSON", arguments);
    }
  }.toJSON
});