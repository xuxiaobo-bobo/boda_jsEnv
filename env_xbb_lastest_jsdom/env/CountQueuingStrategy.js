// CountQueuingStrategy对象

bodavm.memory.globalobj['CountQueuingStrategy'] = function CountQueuingStrategy() {
  console.log_copy('CountQueuingStrategy 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CountQueuingStrategy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CountQueuingStrategy': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CountQueuingStrategy'], "CountQueuingStrategy");
bodavm.toolsFunc.defineProperty('CountQueuingStrategy', "highWaterMark", {
  configurable: true,
  enumerable: true,
  get: function highWaterMark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CountQueuingStrategy'].prototype, "CountQueuingStrategy", "highWaterMark_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CountQueuingStrategy', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CountQueuingStrategy'].prototype, "CountQueuingStrategy", "size_get", arguments);
  },
  set: undefined
}, 'prototype');