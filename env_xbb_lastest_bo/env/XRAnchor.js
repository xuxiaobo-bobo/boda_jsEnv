// XRAnchor对象

XRAnchor = function XRAnchor() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRAnchor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRAnchor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRAnchor, "XRAnchor");
bodavm.toolsFunc.defineProperty(XRAnchor.prototype, "anchorSpace", {
  configurable: true,
  enumerable: true,
  get: function anchorSpace() {
    return bodavm.toolsFunc.dispatch(this, XRAnchor.prototype, "XRAnchor", "anchorSpace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRAnchor.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, XRAnchor.prototype, "XRAnchor", "delete", arguments);
  }
});