// CanvasPattern对象

CanvasPattern = function CanvasPattern() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CanvasPattern)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CanvasPattern 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CanvasPattern, "CanvasPattern");
bodavm.toolsFunc.defineProperty(CanvasPattern.prototype, "setTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTransform() {
    return bodavm.toolsFunc.dispatch(this, CanvasPattern.prototype, "CanvasPattern", "setTransform", arguments);
  }
});