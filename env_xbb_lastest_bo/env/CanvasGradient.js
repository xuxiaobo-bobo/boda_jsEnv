// CanvasGradient对象

CanvasGradient = function CanvasGradient() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CanvasGradient)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CanvasGradient 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CanvasGradient, "CanvasGradient");
bodavm.toolsFunc.defineProperty(CanvasGradient.prototype, "addColorStop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addColorStop() {
    return bodavm.toolsFunc.dispatch(this, CanvasGradient.prototype, "CanvasGradient", "addColorStop", arguments);
  }
});