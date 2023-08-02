// DOMError对象

DOMError = function DOMError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DOMError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DOMError': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMError, "DOMError");
bodavm.toolsFunc.defineProperty(DOMError.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, DOMError.prototype, "DOMError", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMError.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, DOMError.prototype, "DOMError", "message_get", arguments);
  },
  set: undefined
});