// ResizeObserverEntry对象

ResizeObserverEntry = function ResizeObserverEntry() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ResizeObserverEntry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ResizeObserverEntry 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ResizeObserverEntry, "ResizeObserverEntry");
bodavm.toolsFunc.defineProperty(ResizeObserverEntry.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverEntry.prototype, "ResizeObserverEntry", "target_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ResizeObserverEntry.prototype, "contentRect", {
  configurable: true,
  enumerable: true,
  get: function contentRect() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverEntry.prototype, "ResizeObserverEntry", "contentRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ResizeObserverEntry.prototype, "contentBoxSize", {
  configurable: true,
  enumerable: true,
  get: function contentBoxSize() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverEntry.prototype, "ResizeObserverEntry", "contentBoxSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ResizeObserverEntry.prototype, "borderBoxSize", {
  configurable: true,
  enumerable: true,
  get: function borderBoxSize() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverEntry.prototype, "ResizeObserverEntry", "borderBoxSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ResizeObserverEntry.prototype, "devicePixelContentBoxSize", {
  configurable: true,
  enumerable: true,
  get: function devicePixelContentBoxSize() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverEntry.prototype, "ResizeObserverEntry", "devicePixelContentBoxSize_get", arguments);
  },
  set: undefined
});