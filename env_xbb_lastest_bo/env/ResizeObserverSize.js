// ResizeObserverSize对象

ResizeObserverSize = function ResizeObserverSize() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ResizeObserverSize)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ResizeObserverSize 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ResizeObserverSize, "ResizeObserverSize");
bodavm.toolsFunc.defineProperty(ResizeObserverSize.prototype, "inlineSize", {
  configurable: true,
  enumerable: true,
  get: function inlineSize() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverSize.prototype, "ResizeObserverSize", "inlineSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ResizeObserverSize.prototype, "blockSize", {
  configurable: true,
  enumerable: true,
  get: function blockSize() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserverSize.prototype, "ResizeObserverSize", "blockSize_get", arguments);
  },
  set: undefined
});