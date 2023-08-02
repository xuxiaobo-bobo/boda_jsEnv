// Keyboard对象

Keyboard = function Keyboard() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Keyboard)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Keyboard 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Keyboard, "Keyboard");
bodavm.toolsFunc.defineProperty(Keyboard.prototype, "getLayoutMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLayoutMap() {
    return bodavm.toolsFunc.dispatch(this, Keyboard.prototype, "Keyboard", "getLayoutMap", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Keyboard.prototype, "lock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lock() {
    return bodavm.toolsFunc.dispatch(this, Keyboard.prototype, "Keyboard", "lock", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Keyboard.prototype, "unlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unlock() {
    return bodavm.toolsFunc.dispatch(this, Keyboard.prototype, "Keyboard", "unlock", arguments);
  }
});