// ByteLengthQueuingStrategy对象

bodavm.memory.globalobj['ByteLengthQueuingStrategy'] = function ByteLengthQueuingStrategy() {
  console.log_copy('ByteLengthQueuingStrategy 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ByteLengthQueuingStrategy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ByteLengthQueuingStrategy': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ByteLengthQueuingStrategy'], "ByteLengthQueuingStrategy");
bodavm.toolsFunc.defineProperty('ByteLengthQueuingStrategy', "highWaterMark", {
  configurable: true,
  enumerable: true,
  get: function highWaterMark() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ByteLengthQueuingStrategy'].prototype, "ByteLengthQueuingStrategy", "highWaterMark_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ByteLengthQueuingStrategy', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ByteLengthQueuingStrategy'].prototype, "ByteLengthQueuingStrategy", "size_get", arguments);
  },
  set: undefined
}, 'prototype');