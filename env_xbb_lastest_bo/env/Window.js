// Window对象

Window = function Window() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Window)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Window 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Window, "Window");
Window.prototype.__proto__ = bodavm.memory.notDefined['WindowProperties'].prototype;
Window.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Window, "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(Window, "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});