// EyeDropper对象

EyeDropper = function EyeDropper() {
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('EyeDropper 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(EyeDropper, "EyeDropper");
bodavm.toolsFunc.defineProperty(EyeDropper.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, EyeDropper.prototype, "EyeDropper", "open", arguments);
  }
});