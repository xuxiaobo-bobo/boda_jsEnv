// Scheduling对象

Scheduling = function Scheduling() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Scheduling)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Scheduling 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Scheduling, "Scheduling");
bodavm.toolsFunc.defineProperty(Scheduling.prototype, "isInputPending", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isInputPending() {
    return bodavm.toolsFunc.dispatch(this, Scheduling.prototype, "Scheduling", "isInputPending", arguments);
  }
});