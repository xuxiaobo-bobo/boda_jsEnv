// ResizeObserverEntry对象

bodavm.memory.globalobj['ResizeObserverEntry'] = function ResizeObserverEntry() {
  console.log_copy('ResizeObserverEntry 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ResizeObserverEntry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ResizeObserverEntry'], "ResizeObserverEntry");
bodavm.toolsFunc.defineProperty('ResizeObserverEntry', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverEntry'].prototype, "ResizeObserverEntry", "target_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserverEntry', "contentRect", {
  configurable: true,
  enumerable: true,
  get: function contentRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverEntry'].prototype, "ResizeObserverEntry", "contentRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserverEntry', "contentBoxSize", {
  configurable: true,
  enumerable: true,
  get: function contentBoxSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverEntry'].prototype, "ResizeObserverEntry", "contentBoxSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserverEntry', "borderBoxSize", {
  configurable: true,
  enumerable: true,
  get: function borderBoxSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverEntry'].prototype, "ResizeObserverEntry", "borderBoxSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserverEntry', "devicePixelContentBoxSize", {
  configurable: true,
  enumerable: true,
  get: function devicePixelContentBoxSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserverEntry'].prototype, "ResizeObserverEntry", "devicePixelContentBoxSize_get", arguments);
  },
  set: undefined
}, 'prototype');