// DelayNode对象

bodavm.memory.globalobj['DelayNode'] = function DelayNode() {
  console.log_copy('DelayNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DelayNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DelayNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DelayNode'], "DelayNode");
bodavm.memory.globalobj['DelayNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['DelayNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('DelayNode', "delayTime", {
  configurable: true,
  enumerable: true,
  get: function delayTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DelayNode'].prototype, "DelayNode", "delayTime_get", arguments);
  },
  set: undefined
}, 'prototype');