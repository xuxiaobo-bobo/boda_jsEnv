// Sanitizer对象

Sanitizer = function Sanitizer() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Sanitizer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Sanitizer, "Sanitizer");
bodavm.toolsFunc.defineProperty(Sanitizer, "getDefaultConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDefaultConfiguration() {
    return bodavm.toolsFunc.dispatch(this, Sanitizer, "Sanitizer", "getDefaultConfiguration", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Sanitizer.prototype, "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConfiguration() {
    return bodavm.toolsFunc.dispatch(this, Sanitizer.prototype, "Sanitizer", "getConfiguration", arguments);
  }
});