// History对象

bodaEnv.memory.globlProtoObj["History"] = function History() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('History 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["History"], "History");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "scrollRestoration", {
  configurable: true,
  enumerable: true,
  get: {
    scrollRestoration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "scrollRestoration_get", arguments);
    }
  }.scrollRestoration,
  set: {
    scrollRestoration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "scrollRestoration_set", arguments);
    }
  }.scrollRestoration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "back", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    back() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "back", arguments);
    }
  }.back
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "forward", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forward() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "forward", arguments);
    }
  }.forward
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "go", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    go() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "go", arguments);
    }
  }.go
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "pushState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pushState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "pushState", arguments);
    }
  }.pushState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["History"].prototype, "replaceState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["History"].prototype, "History", "replaceState", arguments);
    }
  }.replaceState
});

// history对象

bodaEnv.memory.globlProtoObj["history"] = new bodaEnv.memory.globlProtoObj["History"]('bobo');