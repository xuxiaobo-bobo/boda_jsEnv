// MutationObserver对象

bodavm.memory.globalobj['MutationObserver'] = function MutationObserver() {
  console.log_copy('MutationObserver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MutationObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
  this._callbacck = arguments[0];
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MutationObserver'], "MutationObserver");
bodavm.toolsFunc.defineProperty('MutationObserver', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationObserver'].prototype, "MutationObserver", "disconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationObserver', "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationObserver'].prototype, "MutationObserver", "observe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MutationObserver', "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationObserver'].prototype, "MutationObserver", "takeRecords", arguments);
  }
}, 'prototype');