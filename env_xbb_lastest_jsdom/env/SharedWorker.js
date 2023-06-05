// SharedWorker对象

bodavm.memory.globalobj['SharedWorker'] = function SharedWorker() {
  console.log_copy('SharedWorker 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SharedWorker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SharedWorker': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SharedWorker'], "SharedWorker");
bodavm.memory.globalobj['SharedWorker'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['SharedWorker'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('SharedWorker', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SharedWorker'].prototype, "SharedWorker", "port_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SharedWorker', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SharedWorker'].prototype, "SharedWorker", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SharedWorker'].prototype, "SharedWorker", "onerror_set", arguments);
  }
}, 'prototype');