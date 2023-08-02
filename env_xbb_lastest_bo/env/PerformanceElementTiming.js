// PerformanceElementTiming对象

PerformanceElementTiming = function PerformanceElementTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceElementTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceElementTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceElementTiming, "PerformanceElementTiming");
PerformanceElementTiming.prototype.__proto__ = PerformanceEntry.prototype;
PerformanceElementTiming.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "renderTime", {
  configurable: true,
  enumerable: true,
  get: function renderTime() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "renderTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "loadTime", {
  configurable: true,
  enumerable: true,
  get: function loadTime() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "loadTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "intersectionRect", {
  configurable: true,
  enumerable: true,
  get: function intersectionRect() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "intersectionRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "identifier", {
  configurable: true,
  enumerable: true,
  get: function identifier() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "identifier_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: function naturalWidth() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "naturalWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: function naturalHeight() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "naturalHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "element", {
  configurable: true,
  enumerable: true,
  get: function element() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "element_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceElementTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceElementTiming.prototype, "PerformanceElementTiming", "toJSON", arguments);
  }
});