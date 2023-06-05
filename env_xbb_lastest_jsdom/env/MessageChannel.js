// MessageChannel对象

bodavm.memory.globalobj['MessageChannel'] = function MessageChannel() {
  console.log_copy('MessageChannel 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.MessageChannel();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MessageChannel'], "MessageChannel");
bodavm.toolsFunc.defineProperty('MessageChannel', "port1", {
  configurable: true,
  enumerable: true,
  get: function port1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageChannel'].prototype, "MessageChannel", "port1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MessageChannel', "port2", {
  configurable: true,
  enumerable: true,
  get: function port2() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MessageChannel'].prototype, "MessageChannel", "port2_get", arguments);
  },
  set: undefined
}, 'prototype');