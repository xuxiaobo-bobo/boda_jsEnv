// RTCDTMFToneChangeEvent对象

bodavm.memory.globalobj['RTCDTMFToneChangeEvent'] = function RTCDTMFToneChangeEvent() {
  console.log_copy('RTCDTMFToneChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCDTMFToneChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCDTMFToneChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCDTMFToneChangeEvent'], "RTCDTMFToneChangeEvent");
bodavm.memory.globalobj['RTCDTMFToneChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['RTCDTMFToneChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('RTCDTMFToneChangeEvent', "tone", {
  configurable: true,
  enumerable: true,
  get: function tone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDTMFToneChangeEvent'].prototype, "RTCDTMFToneChangeEvent", "tone_get", arguments);
  },
  set: undefined
}, 'prototype');