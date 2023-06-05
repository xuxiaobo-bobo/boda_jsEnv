// LargestContentfulPaint对象

bodavm.memory.globalobj['LargestContentfulPaint'] = function LargestContentfulPaint() {
  console.log_copy('LargestContentfulPaint 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof LargestContentfulPaint)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['LargestContentfulPaint'], "LargestContentfulPaint");
bodavm.memory.globalobj['LargestContentfulPaint'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['LargestContentfulPaint'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "renderTime", {
  configurable: true,
  enumerable: true,
  get: function renderTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "renderTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "loadTime", {
  configurable: true,
  enumerable: true,
  get: function loadTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "loadTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "element", {
  configurable: true,
  enumerable: true,
  get: function element() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "element_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('LargestContentfulPaint', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['LargestContentfulPaint'].prototype, "LargestContentfulPaint", "toJSON", arguments);
  }
}, 'prototype');