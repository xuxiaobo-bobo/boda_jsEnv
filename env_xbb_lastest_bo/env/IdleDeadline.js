// IdleDeadline对象

IdleDeadline = function IdleDeadline() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IdleDeadline)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IdleDeadline 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IdleDeadline, "IdleDeadline");
bodavm.toolsFunc.defineProperty(IdleDeadline.prototype, "didTimeout", {
  configurable: true,
  enumerable: true,
  get: function didTimeout() {
    return bodavm.toolsFunc.dispatch(this, IdleDeadline.prototype, "IdleDeadline", "didTimeout_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IdleDeadline.prototype, "timeRemaining", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function timeRemaining() {
    return bodavm.toolsFunc.dispatch(this, IdleDeadline.prototype, "IdleDeadline", "timeRemaining", arguments);
  }
});