// UIEvent对象

bodavm.memory.globalobj['UIEvent'] = function UIEvent() {
  console.log_copy('UIEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof UIEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'UIEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['UIEvent'], "UIEvent");
bodavm.memory.globalobj['UIEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['UIEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('UIEvent', "view", {
  configurable: true,
  enumerable: true,
  get: function view() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "view_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "detail_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "sourceCapabilities", {
  configurable: true,
  enumerable: true,
  get: function sourceCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "sourceCapabilities_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "which", {
  configurable: true,
  enumerable: true,
  get: function which() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "which_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('UIEvent', "initUIEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initUIEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['UIEvent'].prototype, "UIEvent", "initUIEvent", arguments);
  }
}, 'prototype');