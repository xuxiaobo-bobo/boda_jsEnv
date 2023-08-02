// Scheduler对象

Scheduler = function Scheduler() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Scheduler)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Scheduler 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Scheduler, "Scheduler");
bodavm.toolsFunc.defineProperty(Scheduler.prototype, "postTask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postTask() {
    return bodavm.toolsFunc.dispatch(this, Scheduler.prototype, "Scheduler", "postTask", arguments);
  }
});