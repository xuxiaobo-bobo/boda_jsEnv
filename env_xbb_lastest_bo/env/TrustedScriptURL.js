// TrustedScriptURL对象

TrustedScriptURL = function TrustedScriptURL() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TrustedScriptURL)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TrustedScriptURL 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TrustedScriptURL, "TrustedScriptURL");
bodavm.toolsFunc.defineProperty(TrustedScriptURL.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, TrustedScriptURL.prototype, "TrustedScriptURL", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedScriptURL.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, TrustedScriptURL.prototype, "TrustedScriptURL", "toString", arguments);
  }
});