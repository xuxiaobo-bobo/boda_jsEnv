// ViewTransition对象

bodavm.memory.globalobj['ViewTransition'] = function ViewTransition() {
  console.log_copy('ViewTransition 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ViewTransition)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ViewTransition'], "ViewTransition");
bodavm.toolsFunc.defineProperty('ViewTransition', "finished", {
  configurable: true,
  enumerable: true,
  get: function finished() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ViewTransition'].prototype, "ViewTransition", "finished_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ViewTransition', "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ViewTransition'].prototype, "ViewTransition", "ready_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ViewTransition', "updateCallbackDone", {
  configurable: true,
  enumerable: true,
  get: function updateCallbackDone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ViewTransition'].prototype, "ViewTransition", "updateCallbackDone_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ViewTransition', "skipTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skipTransition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ViewTransition'].prototype, "ViewTransition", "skipTransition", arguments);
  }
}, 'prototype');