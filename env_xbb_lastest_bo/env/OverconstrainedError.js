// OverconstrainedError对象

OverconstrainedError = function OverconstrainedError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof OverconstrainedError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OverconstrainedError': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('OverconstrainedError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(OverconstrainedError, "OverconstrainedError");
OverconstrainedError.prototype.__proto__ = DOMException.prototype;
OverconstrainedError.__proto__ = DOMException;
bodavm.toolsFunc.defineProperty(OverconstrainedError.prototype, "constraint", {
  configurable: true,
  enumerable: true,
  get: function constraint() {
    return bodavm.toolsFunc.dispatch(this, OverconstrainedError.prototype, "OverconstrainedError", "constraint_get", arguments);
  },
  set: undefined
});