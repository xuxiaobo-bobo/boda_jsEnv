// IntersectionObserver对象

IntersectionObserver = function IntersectionObserver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IntersectionObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IntersectionObserver': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IntersectionObserver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IntersectionObserver, "IntersectionObserver");
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "root", {
  configurable: true,
  enumerable: true,
  get: function root() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "root_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "rootMargin", {
  configurable: true,
  enumerable: true,
  get: function rootMargin() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "rootMargin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "thresholds", {
  configurable: true,
  enumerable: true,
  get: function thresholds() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "thresholds_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "delay", {
  configurable: true,
  enumerable: true,
  get: function delay() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "delay_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "trackVisibility", {
  configurable: true,
  enumerable: true,
  get: function trackVisibility() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "trackVisibility_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "disconnect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "observe", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "takeRecords", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IntersectionObserver.prototype, "unobserve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unobserve() {
    return bodavm.toolsFunc.dispatch(this, IntersectionObserver.prototype, "IntersectionObserver", "unobserve", arguments);
  }
});