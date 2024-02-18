// MIDIAccess对象

bodaEnv.memory.globlProtoObj["MIDIAccess"] = function MIDIAccess() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIAccess 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIAccess"], "MIDIAccess");
bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MIDIAccess"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "inputs", {
  configurable: true,
  enumerable: true,
  get: {
    inputs() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "MIDIAccess", "inputs_get", arguments);
    }
  }.inputs,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "outputs", {
  configurable: true,
  enumerable: true,
  get: {
    outputs() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "MIDIAccess", "outputs_get", arguments);
    }
  }.outputs,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "sysexEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    sysexEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "MIDIAccess", "sysexEnabled_get", arguments);
    }
  }.sysexEnabled,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "MIDIAccess", "onstatechange_get", arguments);
    }
  }.onstatechange,
  set: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIAccess"].prototype, "MIDIAccess", "onstatechange_set", arguments);
    }
  }.onstatechange
});