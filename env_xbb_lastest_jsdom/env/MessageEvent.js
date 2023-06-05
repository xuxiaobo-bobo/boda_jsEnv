// MessageEvent对象

bodavm.memory.globalobj['MessageEvent'] = function MessageEvent() {
  console.log_copy('MessageEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MessageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MessageEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MessageEvent'], "MessageEvent");
bodavm.memory.globalobj['MessageEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MessageEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MessageEvent', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageEvent', "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "origin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageEvent', "lastEventId", {
  configurable: true,
  enumerable: true,
  get: function lastEventId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "lastEventId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageEvent', "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "source_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageEvent', "ports", {
  configurable: true,
  enumerable: true,
  get: function ports() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "ports_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageEvent', "userActivation", {
  configurable: true,
  enumerable: true,
  get: function userActivation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "userActivation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageEvent', "initMessageEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initMessageEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageEvent'].prototype, "MessageEvent", "initMessageEvent", arguments);
  }
}, 'prototype');