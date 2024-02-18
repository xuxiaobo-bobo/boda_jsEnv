// CloseEvent对象

bodaEnv.memory.globlProtoObj["CloseEvent"] = function CloseEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CloseEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CloseEvent"], "CloseEvent");
bodaEnv.memory.globlProtoObj["CloseEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["CloseEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CloseEvent"].prototype, "wasClean", {
  configurable: true,
  enumerable: true,
  get: {
    wasClean() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CloseEvent"].prototype, "CloseEvent", "wasClean_get", arguments);
    }
  }.wasClean,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CloseEvent"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CloseEvent"].prototype, "CloseEvent", "code_get", arguments);
    }
  }.code,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CloseEvent"].prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: {
    reason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CloseEvent"].prototype, "CloseEvent", "reason_get", arguments);
    }
  }.reason,
  set: undefined
});