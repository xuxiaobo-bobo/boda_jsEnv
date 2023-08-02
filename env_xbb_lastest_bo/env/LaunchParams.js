// LaunchParams对象

LaunchParams = function LaunchParams() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof LaunchParams)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LaunchParams 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LaunchParams, "LaunchParams");
bodavm.toolsFunc.defineProperty(LaunchParams.prototype, "files", {
  configurable: true,
  enumerable: true,
  get: function files() {
    return bodavm.toolsFunc.dispatch(this, LaunchParams.prototype, "LaunchParams", "files_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LaunchParams.prototype, "targetURL", {
  configurable: true,
  enumerable: true,
  get: function targetURL() {
    return bodavm.toolsFunc.dispatch(this, LaunchParams.prototype, "LaunchParams", "targetURL_get", arguments);
  },
  set: undefined
});