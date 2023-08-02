// CountQueuingStrategy对象

CountQueuingStrategy = function CountQueuingStrategy() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CountQueuingStrategy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CountQueuingStrategy': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CountQueuingStrategy 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CountQueuingStrategy, "CountQueuingStrategy");
bodavm.toolsFunc.defineProperty(CountQueuingStrategy.prototype, "highWaterMark", {
  configurable: true,
  enumerable: true,
  get: function highWaterMark() {
    return bodavm.toolsFunc.dispatch(this, CountQueuingStrategy.prototype, "CountQueuingStrategy", "highWaterMark_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CountQueuingStrategy.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, CountQueuingStrategy.prototype, "CountQueuingStrategy", "size_get", arguments);
  },
  set: undefined
});