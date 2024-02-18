// NavigateEvent对象

bodaEnv.memory.globlProtoObj["NavigateEvent"] = function NavigateEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigateEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigateEvent"], "NavigateEvent");
bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["NavigateEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "navigationType", {
  configurable: true,
  enumerable: true,
  get: {
    navigationType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "navigationType_get", arguments);
    }
  }.navigationType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "destination", {
  configurable: true,
  enumerable: true,
  get: {
    destination() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "destination_get", arguments);
    }
  }.destination,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "canTransition", {
  configurable: true,
  enumerable: true,
  get: {
    canTransition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "canTransition_get", arguments);
    }
  }.canTransition,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "canIntercept", {
  configurable: true,
  enumerable: true,
  get: {
    canIntercept() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "canIntercept_get", arguments);
    }
  }.canIntercept,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "userInitiated", {
  configurable: true,
  enumerable: true,
  get: {
    userInitiated() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "userInitiated_get", arguments);
    }
  }.userInitiated,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "hashChange", {
  configurable: true,
  enumerable: true,
  get: {
    hashChange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "hashChange_get", arguments);
    }
  }.hashChange,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: {
    signal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "signal_get", arguments);
    }
  }.signal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "formData", {
  configurable: true,
  enumerable: true,
  get: {
    formData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "formData_get", arguments);
    }
  }.formData,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "downloadRequest", {
  configurable: true,
  enumerable: true,
  get: {
    downloadRequest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "downloadRequest_get", arguments);
    }
  }.downloadRequest,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "info", {
  configurable: true,
  enumerable: true,
  get: {
    info() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "info_get", arguments);
    }
  }.info,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "intercept", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    intercept() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "intercept", arguments);
    }
  }.intercept
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigateEvent"].prototype, "NavigateEvent", "scroll", arguments);
    }
  }.scroll
});