// HIDConnectionEvent对象

bodavm.memory.globalobj['HIDConnectionEvent'] = function HIDConnectionEvent() {
  console.log_copy('HIDConnectionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HIDConnectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'HIDConnectionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HIDConnectionEvent'], "HIDConnectionEvent");
bodavm.memory.globalobj['HIDConnectionEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['HIDConnectionEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('HIDConnectionEvent', "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDConnectionEvent'].prototype, "HIDConnectionEvent", "device_get", arguments);
  },
  set: undefined
}, 'prototype');