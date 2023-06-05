// InputEvent对象

bodavm.memory.globalobj['InputEvent'] = function InputEvent() {
  console.log_copy('InputEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof InputEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'InputEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['InputEvent'], "InputEvent");
bodavm.memory.globalobj['InputEvent'].prototype.__proto__ = bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['InputEvent'].__proto__ = bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('InputEvent', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputEvent'].prototype, "InputEvent", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('InputEvent', "isComposing", {
  configurable: true,
  enumerable: true,
  get: function isComposing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputEvent'].prototype, "InputEvent", "isComposing_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('InputEvent', "inputType", {
  configurable: true,
  enumerable: true,
  get: function inputType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputEvent'].prototype, "InputEvent", "inputType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('InputEvent', "dataTransfer", {
  configurable: true,
  enumerable: true,
  get: function dataTransfer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputEvent'].prototype, "InputEvent", "dataTransfer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('InputEvent', "getTargetRanges", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTargetRanges() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputEvent'].prototype, "InputEvent", "getTargetRanges", arguments);
  }
}, 'prototype');