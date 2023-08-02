// CustomElementRegistry对象

CustomElementRegistry = function CustomElementRegistry() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CustomElementRegistry)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CustomElementRegistry 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CustomElementRegistry, "CustomElementRegistry");
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype, "define", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function define() {
    return bodavm.toolsFunc.dispatch(this, CustomElementRegistry.prototype, "CustomElementRegistry", "define", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, CustomElementRegistry.prototype, "CustomElementRegistry", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype, "upgrade", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function upgrade() {
    return bodavm.toolsFunc.dispatch(this, CustomElementRegistry.prototype, "CustomElementRegistry", "upgrade", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CustomElementRegistry.prototype, "whenDefined", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function whenDefined() {
    return bodavm.toolsFunc.dispatch(this, CustomElementRegistry.prototype, "CustomElementRegistry", "whenDefined", arguments);
  }
});