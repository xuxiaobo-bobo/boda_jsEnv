// External对象

External = function External() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof External)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('External 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(External, "External");
bodavm.toolsFunc.defineProperty(External.prototype, "AddSearchProvider", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function AddSearchProvider() {
    return bodavm.toolsFunc.dispatch(this, External.prototype, "External", "AddSearchProvider", arguments);
  }
});
bodavm.toolsFunc.defineProperty(External.prototype, "IsSearchProviderInstalled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function IsSearchProviderInstalled() {
    return bodavm.toolsFunc.dispatch(this, External.prototype, "External", "IsSearchProviderInstalled", arguments);
  }
});