// NavigateEvent对象

bodavm.memory.globalobj['NavigateEvent'] = function NavigateEvent() {
  console.log_copy('NavigateEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigateEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'NavigateEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigateEvent'], "NavigateEvent");
bodavm.memory.globalobj['NavigateEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['NavigateEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('NavigateEvent', "navigationType", {
  configurable: true,
  enumerable: true,
  get: function navigationType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "navigationType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "destination", {
  configurable: true,
  enumerable: true,
  get: function destination() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "destination_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "canTransition", {
  configurable: true,
  enumerable: true,
  get: function canTransition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "canTransition_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "canIntercept", {
  configurable: true,
  enumerable: true,
  get: function canIntercept() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "canIntercept_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "userInitiated", {
  configurable: true,
  enumerable: true,
  get: function userInitiated() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "userInitiated_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "hashChange", {
  configurable: true,
  enumerable: true,
  get: function hashChange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "hashChange_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "signal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "formData", {
  configurable: true,
  enumerable: true,
  get: function formData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "formData_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "downloadRequest", {
  configurable: true,
  enumerable: true,
  get: function downloadRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "downloadRequest_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "info", {
  configurable: true,
  enumerable: true,
  get: function info() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "info_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "intercept", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function intercept() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "intercept", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigateEvent', "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scroll() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigateEvent'].prototype, "NavigateEvent", "scroll", arguments);
  }
}, 'prototype');