// AudioParam对象

bodaEnv.memory.globlProtoObj["AudioParam"] = function AudioParam() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioParam 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioParam"], "AudioParam");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "automationRate", {
  configurable: true,
  enumerable: true,
  get: {
    automationRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "automationRate_get", arguments);
    }
  }.automationRate,
  set: {
    automationRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "automationRate_set", arguments);
    }
  }.automationRate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: {
    defaultValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "defaultValue_get", arguments);
    }
  }.defaultValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "minValue", {
  configurable: true,
  enumerable: true,
  get: {
    minValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "minValue_get", arguments);
    }
  }.minValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "maxValue", {
  configurable: true,
  enumerable: true,
  get: {
    maxValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "maxValue_get", arguments);
    }
  }.maxValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "cancelAndHoldAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelAndHoldAtTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "cancelAndHoldAtTime", arguments);
    }
  }.cancelAndHoldAtTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "cancelScheduledValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelScheduledValues() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "cancelScheduledValues", arguments);
    }
  }.cancelScheduledValues
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "exponentialRampToValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    exponentialRampToValueAtTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "exponentialRampToValueAtTime", arguments);
    }
  }.exponentialRampToValueAtTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "linearRampToValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    linearRampToValueAtTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "linearRampToValueAtTime", arguments);
    }
  }.linearRampToValueAtTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "setTargetAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setTargetAtTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "setTargetAtTime", arguments);
    }
  }.setTargetAtTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "setValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setValueAtTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "setValueAtTime", arguments);
    }
  }.setValueAtTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "setValueCurveAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setValueCurveAtTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioParam"].prototype, "AudioParam", "setValueCurveAtTime", arguments);
    }
  }.setValueCurveAtTime
});