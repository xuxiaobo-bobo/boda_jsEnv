// CompositionEvent对象

bodavm.memory.globalobj['CompositionEvent'] = function CompositionEvent() {
  console.log_copy('CompositionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CompositionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CompositionEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CompositionEvent'], "CompositionEvent");
bodavm.memory.globalobj['CompositionEvent'].prototype.__proto__ = bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['CompositionEvent'].__proto__ = bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('CompositionEvent', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CompositionEvent'].prototype, "CompositionEvent", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CompositionEvent', "initCompositionEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initCompositionEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CompositionEvent'].prototype, "CompositionEvent", "initCompositionEvent", arguments);
  }
}, 'prototype');