// IntersectionObserverEntry对象

IntersectionObserverEntry = function IntersectionObserverEntry() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IntersectionObserverEntry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IntersectionObserverEntry 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IntersectionObserverEntry, "IntersectionObserverEntry");
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "time", {
  configurable: true,
  enumerable: true,
  get: function time() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "time_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "rootBounds", {
  configurable: true,
  enumerable: true,
  get: function rootBounds() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "rootBounds_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "boundingClientRect", {
  configurable: true,
  enumerable: true,
  get: function boundingClientRect() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "boundingClientRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "intersectionRect", {
  configurable: true,
  enumerable: true,
  get: function intersectionRect() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "intersectionRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "isIntersecting", {
  configurable: true,
  enumerable: true,
  get: function isIntersecting() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "isIntersecting_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "isVisible", {
  configurable: true,
  enumerable: true,
  get: function isVisible() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "isVisible_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "intersectionRatio", {
  configurable: true,
  enumerable: true,
  get: function intersectionRatio() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "intersectionRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserverEntry.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserverEntry.prototype, "IntersectionObserverEntry", "target_get", arguments);
  },
  set: undefined
});