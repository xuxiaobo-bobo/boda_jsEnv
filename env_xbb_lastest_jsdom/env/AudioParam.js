// AudioParam对象

bodavm.memory.globalobj['AudioParam'] = function AudioParam() {
  console.log_copy('AudioParam 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioParam)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioParam'], "AudioParam");
bodavm.toolsFunc.defineProperty('AudioParam', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "automationRate", {
  configurable: true,
  enumerable: true,
  get: function automationRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "automationRate_get", arguments);
  },
  set: function automationRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "automationRate_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "defaultValue", {
  configurable: true,
  enumerable: true,
  get: function defaultValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "defaultValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "minValue", {
  configurable: true,
  enumerable: true,
  get: function minValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "minValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "maxValue", {
  configurable: true,
  enumerable: true,
  get: function maxValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "maxValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "cancelAndHoldAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelAndHoldAtTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "cancelAndHoldAtTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "cancelScheduledValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelScheduledValues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "cancelScheduledValues", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "exponentialRampToValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exponentialRampToValueAtTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "exponentialRampToValueAtTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "linearRampToValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function linearRampToValueAtTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "linearRampToValueAtTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "setTargetAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTargetAtTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "setTargetAtTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "setValueAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setValueAtTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "setValueAtTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParam', "setValueCurveAtTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setValueCurveAtTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParam'].prototype, "AudioParam", "setValueCurveAtTime", arguments);
  }
}, 'prototype');