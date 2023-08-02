// Worklet对象

Worklet = function Worklet() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Worklet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Worklet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Worklet, "Worklet");
bodavm.toolsFunc.defineProperty(Worklet.prototype, "addModule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addModule() {
    return bodavm.toolsFunc.dispatch(this, Worklet.prototype, "Worklet", "addModule", arguments);
  }
});