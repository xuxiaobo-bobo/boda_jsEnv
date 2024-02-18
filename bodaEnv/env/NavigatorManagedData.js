// NavigatorManagedData对象

bodaEnv.memory.globlProtoObj["NavigatorManagedData"] = function NavigatorManagedData() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigatorManagedData 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigatorManagedData"], "NavigatorManagedData");
bodaEnv.memory.globlProtoObj["NavigatorManagedData"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["NavigatorManagedData"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorManagedData"].prototype, "onmanagedconfigurationchange", {
  configurable: true,
  enumerable: true,
  get: {
    onmanagedconfigurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorManagedData"].prototype, "NavigatorManagedData", "onmanagedconfigurationchange_get", arguments);
    }
  }.onmanagedconfigurationchange,
  set: {
    onmanagedconfigurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorManagedData"].prototype, "NavigatorManagedData", "onmanagedconfigurationchange_set", arguments);
    }
  }.onmanagedconfigurationchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigatorManagedData"].prototype, "getManagedConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getManagedConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigatorManagedData"].prototype, "NavigatorManagedData", "getManagedConfiguration", arguments);
    }
  }.getManagedConfiguration
});