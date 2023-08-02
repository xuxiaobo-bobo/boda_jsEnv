// Ink对象

Ink = function Ink() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Ink)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Ink 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Ink, "Ink");
bodavm.toolsFunc.defineProperty(Ink.prototype, "requestPresenter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPresenter() {
    return bodavm.toolsFunc.dispatch(this, Ink.prototype, "Ink", "requestPresenter", arguments);
  }
});