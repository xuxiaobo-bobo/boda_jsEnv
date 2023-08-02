// ByteLengthQueuingStrategy对象

ByteLengthQueuingStrategy = function ByteLengthQueuingStrategy() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ByteLengthQueuingStrategy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ByteLengthQueuingStrategy': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ByteLengthQueuingStrategy 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ByteLengthQueuingStrategy, "ByteLengthQueuingStrategy");
bodavm.toolsFunc.defineProperty(ByteLengthQueuingStrategy.prototype, "highWaterMark", {
  configurable: true,
  enumerable: true,
  get: function highWaterMark() {
    return bodavm.toolsFunc.dispatch(this, ByteLengthQueuingStrategy.prototype, "ByteLengthQueuingStrategy", "highWaterMark_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ByteLengthQueuingStrategy.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, ByteLengthQueuingStrategy.prototype, "ByteLengthQueuingStrategy", "size_get", arguments);
  },
  set: undefined
});