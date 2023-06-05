// TouchEvent对象

bodavm.memory.globalobj['TouchEvent'] = function TouchEvent() {
  console.log_copy('TouchEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TouchEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TouchEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TouchEvent'], "TouchEvent");
bodavm.memory.globalobj['TouchEvent'].prototype.__proto__ = bodavm.memory.globalobj['UIEvent'].prototype;
bodavm.memory.globalobj['TouchEvent'].__proto__ = bodavm.memory.globalobj['UIEvent'];
bodavm.toolsFunc.defineProperty('TouchEvent', "touches", {
  configurable: true,
  enumerable: true,
  get: function touches() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "touches_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TouchEvent', "targetTouches", {
  configurable: true,
  enumerable: true,
  get: function targetTouches() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "targetTouches_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TouchEvent', "changedTouches", {
  configurable: true,
  enumerable: true,
  get: function changedTouches() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "changedTouches_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TouchEvent', "altKey", {
  configurable: true,
  enumerable: true,
  get: function altKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "altKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TouchEvent', "metaKey", {
  configurable: true,
  enumerable: true,
  get: function metaKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "metaKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TouchEvent', "ctrlKey", {
  configurable: true,
  enumerable: true,
  get: function ctrlKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "ctrlKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TouchEvent', "shiftKey", {
  configurable: true,
  enumerable: true,
  get: function shiftKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TouchEvent'].prototype, "TouchEvent", "shiftKey_get", arguments);
  },
  set: undefined
}, 'prototype');