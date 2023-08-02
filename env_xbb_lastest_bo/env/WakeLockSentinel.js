// WakeLockSentinel对象

WakeLockSentinel = function WakeLockSentinel() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WakeLockSentinel)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WakeLockSentinel 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WakeLockSentinel, "WakeLockSentinel");
WakeLockSentinel.prototype.__proto__ = EventTarget.prototype;
WakeLockSentinel.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "onrelease", {
  configurable: true,
  enumerable: true,
  get: function onrelease() {
    return bodavm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "onrelease_get", arguments);
  },
  set: function onrelease() {
    return bodavm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "onrelease_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "released", {
  configurable: true,
  enumerable: true,
  get: function released() {
    return bodavm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "released_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "release", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function release() {
    return bodavm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "release", arguments);
  }
});