// Gamepad对象

bodaEnv.memory.globlProtoObj["Gamepad"] = function Gamepad() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Gamepad 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Gamepad"], "Gamepad");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "index", {
  configurable: true,
  enumerable: true,
  get: {
    index() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "index_get", arguments);
    }
  }.index,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "connected", {
  configurable: true,
  enumerable: true,
  get: {
    connected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "connected_get", arguments);
    }
  }.connected,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "mapping", {
  configurable: true,
  enumerable: true,
  get: {
    mapping() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "mapping_get", arguments);
    }
  }.mapping,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "axes", {
  configurable: true,
  enumerable: true,
  get: {
    axes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "axes_get", arguments);
    }
  }.axes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "buttons", {
  configurable: true,
  enumerable: true,
  get: {
    buttons() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "buttons_get", arguments);
    }
  }.buttons,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "vibrationActuator", {
  configurable: true,
  enumerable: true,
  get: {
    vibrationActuator() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gamepad"].prototype, "Gamepad", "vibrationActuator_get", arguments);
    }
  }.vibrationActuator,
  set: undefined
});