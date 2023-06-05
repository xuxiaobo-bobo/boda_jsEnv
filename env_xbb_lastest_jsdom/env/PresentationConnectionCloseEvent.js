// PresentationConnectionCloseEvent对象

bodavm.memory.globalobj['PresentationConnectionCloseEvent'] = function PresentationConnectionCloseEvent() {
  console.log_copy('PresentationConnectionCloseEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PresentationConnectionCloseEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionCloseEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationConnectionCloseEvent'], "PresentationConnectionCloseEvent");
bodavm.memory.globalobj['PresentationConnectionCloseEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PresentationConnectionCloseEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PresentationConnectionCloseEvent', "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionCloseEvent'].prototype, "PresentationConnectionCloseEvent", "reason_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnectionCloseEvent', "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionCloseEvent'].prototype, "PresentationConnectionCloseEvent", "message_get", arguments);
  },
  set: undefined
}, 'prototype');