// Lock对象

Lock = function Lock() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Lock)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Lock 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Lock, "Lock");
bodavm.toolsFunc.defineProperty(Lock.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, Lock.prototype, "Lock", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Lock.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, Lock.prototype, "Lock", "mode_get", arguments);
  },
  set: undefined
});