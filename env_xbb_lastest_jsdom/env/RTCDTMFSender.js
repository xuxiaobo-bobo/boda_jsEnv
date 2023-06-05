// RTCDTMFSender对象

bodavm.memory.globalobj['RTCDTMFSender'] = function RTCDTMFSender() {
  console.log_copy('RTCDTMFSender 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCDTMFSender)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCDTMFSender'], "RTCDTMFSender");
bodavm.memory.globalobj['RTCDTMFSender'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RTCDTMFSender'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RTCDTMFSender', "ontonechange", {
  configurable: true,
  enumerable: true,
  get: function ontonechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDTMFSender'].prototype, "RTCDTMFSender", "ontonechange_get", arguments);
  },
  set: function ontonechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDTMFSender'].prototype, "RTCDTMFSender", "ontonechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDTMFSender', "canInsertDTMF", {
  configurable: true,
  enumerable: true,
  get: function canInsertDTMF() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDTMFSender'].prototype, "RTCDTMFSender", "canInsertDTMF_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDTMFSender', "toneBuffer", {
  configurable: true,
  enumerable: true,
  get: function toneBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDTMFSender'].prototype, "RTCDTMFSender", "toneBuffer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCDTMFSender', "insertDTMF", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertDTMF() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCDTMFSender'].prototype, "RTCDTMFSender", "insertDTMF", arguments);
  }
}, 'prototype');