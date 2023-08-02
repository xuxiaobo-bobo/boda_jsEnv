// Clipboard对象

Clipboard = function Clipboard() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Clipboard)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Clipboard 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Clipboard, "Clipboard");
Clipboard.prototype.__proto__ = EventTarget.prototype;
Clipboard.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Clipboard.prototype, "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function read() {
    return bodavm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "read", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Clipboard.prototype, "readText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readText() {
    return bodavm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "readText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Clipboard.prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "write", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Clipboard.prototype, "writeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeText() {
    return bodavm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "writeText", arguments);
  }
});