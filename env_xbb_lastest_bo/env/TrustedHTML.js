// TrustedHTML对象

TrustedHTML = function TrustedHTML() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TrustedHTML)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TrustedHTML 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TrustedHTML, "TrustedHTML");
bodavm.toolsFunc.defineProperty(TrustedHTML.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, TrustedHTML.prototype, "TrustedHTML", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedHTML.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, TrustedHTML.prototype, "TrustedHTML", "toString", arguments);
  }
});