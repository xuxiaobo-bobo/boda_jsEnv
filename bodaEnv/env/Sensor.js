// Sensor对象

bodaEnv.memory.globlProtoObj["Sensor"] = function Sensor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Sensor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Sensor"], "Sensor");
bodaEnv.memory.globlProtoObj["Sensor"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Sensor"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "activated", {
  configurable: true,
  enumerable: true,
  get: {
    activated() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "activated_get", arguments);
    }
  }.activated,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "hasReading", {
  configurable: true,
  enumerable: true,
  get: {
    hasReading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "hasReading_get", arguments);
    }
  }.hasReading,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "onreading", {
  configurable: true,
  enumerable: true,
  get: {
    onreading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "onreading_get", arguments);
    }
  }.onreading,
  set: {
    onreading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "onreading_set", arguments);
    }
  }.onreading
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "onactivate", {
  configurable: true,
  enumerable: true,
  get: {
    onactivate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "onactivate_get", arguments);
    }
  }.onactivate,
  set: {
    onactivate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "onactivate_set", arguments);
    }
  }.onactivate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "start", arguments);
    }
  }.start
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Sensor"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Sensor"].prototype, "Sensor", "stop", arguments);
    }
  }.stop
});