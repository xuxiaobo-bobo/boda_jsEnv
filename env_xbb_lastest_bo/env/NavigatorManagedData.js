// NavigatorManagedData对象

NavigatorManagedData = function NavigatorManagedData() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigatorManagedData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigatorManagedData 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigatorManagedData, "NavigatorManagedData");
NavigatorManagedData.prototype.__proto__ = EventTarget.prototype;
NavigatorManagedData.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(NavigatorManagedData.prototype, "onmanagedconfigurationchange", {
  configurable: true,
  enumerable: true,
  get: function onmanagedconfigurationchange() {
    return bodavm.toolsFunc.dispatch(this, NavigatorManagedData.prototype, "NavigatorManagedData", "onmanagedconfigurationchange_get", arguments);
  },
  set: function onmanagedconfigurationchange() {
    return bodavm.toolsFunc.dispatch(this, NavigatorManagedData.prototype, "NavigatorManagedData", "onmanagedconfigurationchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NavigatorManagedData.prototype, "getManagedConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getManagedConfiguration() {
    return bodavm.toolsFunc.dispatch(this, NavigatorManagedData.prototype, "NavigatorManagedData", "getManagedConfiguration", arguments);
  }
});