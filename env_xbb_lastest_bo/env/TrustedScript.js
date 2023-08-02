// TrustedScript对象

TrustedScript = function TrustedScript() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TrustedScript)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TrustedScript 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TrustedScript, "TrustedScript");
bodavm.toolsFunc.defineProperty(TrustedScript.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, TrustedScript.prototype, "TrustedScript", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedScript.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, TrustedScript.prototype, "TrustedScript", "toString", arguments);
  }
});