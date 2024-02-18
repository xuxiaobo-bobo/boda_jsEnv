// AbortSignal对象

bodaEnv.memory.globlProtoObj["AbortSignal"] = function AbortSignal() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AbortSignal 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AbortSignal"], "AbortSignal");
bodaEnv.memory.globlProtoObj["AbortSignal"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["AbortSignal"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"], "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"], "AbortSignal", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"], "timeout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    timeout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"], "AbortSignal", "timeout", arguments);
    }
  }.timeout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"], "any", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    any() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbstractRange"], "AbortSignal", "any", arguments);
    }
  }.any
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "aborted", {
  configurable: true,
  enumerable: true,
  get: {
    aborted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "AbortSignal", "aborted_get", arguments);
    }
  }.aborted,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: {
    reason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "AbortSignal", "reason_get", arguments);
    }
  }.reason,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "AbortSignal", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "AbortSignal", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "throwIfAborted", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    throwIfAborted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortSignal"].prototype, "AbortSignal", "throwIfAborted", arguments);
    }
  }.throwIfAborted
});