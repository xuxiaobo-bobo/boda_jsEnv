// AbortSignal对象

AbortSignal = function AbortSignal() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AbortSignal)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AbortSignal 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AbortSignal, "AbortSignal");
AbortSignal.prototype.__proto__ = EventTarget.prototype;
AbortSignal.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(AbortSignal, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal, "AbortSignal", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AbortSignal, "timeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function timeout() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal, "AbortSignal", "timeout", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AbortSignal.prototype, "aborted", {
  configurable: true,
  enumerable: true,
  get: function aborted() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "aborted_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbortSignal.prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "reason_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbortSignal.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AbortSignal.prototype, "throwIfAborted", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function throwIfAborted() {
    return bodavm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "throwIfAborted", arguments);
  }
});