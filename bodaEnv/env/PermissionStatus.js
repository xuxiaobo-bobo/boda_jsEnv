// PermisbodaStatus对象

bodaEnv.memory.globlProtoObj["PermisbodaStatus"] = function PermisbodaStatus() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PermisbodaStatus 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PermisbodaStatus"], "PermisbodaStatus");
bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PermisbodaStatus"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "PermisbodaStatus", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "PermisbodaStatus", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "PermisbodaStatus", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PermisbodaStatus"].prototype, "PermisbodaStatus", "onchange_set", arguments);
    }
  }.onchange
});