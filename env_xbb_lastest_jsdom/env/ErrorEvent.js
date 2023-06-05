// ErrorEvent对象

bodavm.memory.globalobj['ErrorEvent'] = function ErrorEvent() {
  console.log_copy('ErrorEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ErrorEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ErrorEvent'], "ErrorEvent");
bodavm.memory.globalobj['ErrorEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['ErrorEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('ErrorEvent', "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ErrorEvent'].prototype, "ErrorEvent", "message_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ErrorEvent', "filename", {
  configurable: true,
  enumerable: true,
  get: function filename() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ErrorEvent'].prototype, "ErrorEvent", "filename_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ErrorEvent', "lineno", {
  configurable: true,
  enumerable: true,
  get: function lineno() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ErrorEvent'].prototype, "ErrorEvent", "lineno_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ErrorEvent', "colno", {
  configurable: true,
  enumerable: true,
  get: function colno() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ErrorEvent'].prototype, "ErrorEvent", "colno_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ErrorEvent', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ErrorEvent'].prototype, "ErrorEvent", "error_get", arguments);
  },
  set: undefined
}, 'prototype');