// LargestContentfulPaint对象

LargestContentfulPaint = function LargestContentfulPaint() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof LargestContentfulPaint)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LargestContentfulPaint 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LargestContentfulPaint, "LargestContentfulPaint");
LargestContentfulPaint.prototype.__proto__ = PerformanceEntry.prototype;
LargestContentfulPaint.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "renderTime", {
  configurable: true,
  enumerable: true,
  get: function renderTime() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "renderTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "loadTime", {
  configurable: true,
  enumerable: true,
  get: function loadTime() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "loadTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "element", {
  configurable: true,
  enumerable: true,
  get: function element() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "element_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LargestContentfulPaint.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, LargestContentfulPaint.prototype, "LargestContentfulPaint", "toJSON", arguments);
  }
});