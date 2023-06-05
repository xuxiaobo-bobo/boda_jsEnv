// IntersectionObserverEntry对象

bodavm.memory.globalobj['IntersectionObserverEntry'] = function IntersectionObserverEntry() {
  console.log_copy('IntersectionObserverEntry 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IntersectionObserverEntry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IntersectionObserverEntry'], "IntersectionObserverEntry");
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "time", {
  configurable: true,
  enumerable: true,
  get: function time() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "time_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "rootBounds", {
  configurable: true,
  enumerable: true,
  get: function rootBounds() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "rootBounds_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "boundingClientRect", {
  configurable: true,
  enumerable: true,
  get: function boundingClientRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "boundingClientRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "intersectionRect", {
  configurable: true,
  enumerable: true,
  get: function intersectionRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "intersectionRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "isIntersecting", {
  configurable: true,
  enumerable: true,
  get: function isIntersecting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "isIntersecting_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "isVisible", {
  configurable: true,
  enumerable: true,
  get: function isVisible() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "isVisible_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "intersectionRatio", {
  configurable: true,
  enumerable: true,
  get: function intersectionRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "intersectionRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IntersectionObserverEntry', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IntersectionObserverEntry'].prototype, "IntersectionObserverEntry", "target_get", arguments);
  },
  set: undefined
}, 'prototype');