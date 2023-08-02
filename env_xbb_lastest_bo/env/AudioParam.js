// AudioParam对象

AudioParam = function AudioParam() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioParam)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioParam 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioParam, "AudioParam");
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "automationRate", {
  configurable: true,
  enumerable: true,
  get: function automationRate() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "automationRate_get", arguments);
  },
  set: function automationRate() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "automationRate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "defaultValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "minValue", {
  configurable: true,
  enumerable: true,
  get: function minValue() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "minValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "maxValue", {
  configurable: true,
  enumerable: true,
  get: function maxValue() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "maxValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "cancelAndHoldAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelAndHoldAtTime() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "cancelAndHoldAtTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "cancelScheduledValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelScheduledValues() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "cancelScheduledValues", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "exponentialRampToValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exponentialRampToValueAtTime() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "exponentialRampToValueAtTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "linearRampToValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function linearRampToValueAtTime() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "linearRampToValueAtTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "setTargetAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTargetAtTime() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "setTargetAtTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "setValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setValueAtTime() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "setValueAtTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParam.prototype, "setValueCurveAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setValueCurveAtTime() {
    return bodavm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParam", "setValueCurveAtTime", arguments);
  }
});