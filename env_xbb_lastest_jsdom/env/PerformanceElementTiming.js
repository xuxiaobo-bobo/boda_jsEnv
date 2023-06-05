// PerformanceElementTiming对象

bodavm.memory.globalobj['PerformanceElementTiming'] = function PerformanceElementTiming() {
  console.log_copy('PerformanceElementTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceElementTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceElementTiming'], "PerformanceElementTiming");
bodavm.memory.globalobj['PerformanceElementTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformanceElementTiming'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "renderTime", {
  configurable: true,
  enumerable: true,
  get: function renderTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "renderTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "loadTime", {
  configurable: true,
  enumerable: true,
  get: function loadTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "loadTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "intersectionRect", {
  configurable: true,
  enumerable: true,
  get: function intersectionRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "intersectionRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "identifier", {
  configurable: true,
  enumerable: true,
  get: function identifier() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "identifier_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: function naturalWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "naturalWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: function naturalHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "naturalHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "element", {
  configurable: true,
  enumerable: true,
  get: function element() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "element_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "url_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceElementTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceElementTiming'].prototype, "PerformanceElementTiming", "toJSON", arguments);
  }
}, 'prototype');