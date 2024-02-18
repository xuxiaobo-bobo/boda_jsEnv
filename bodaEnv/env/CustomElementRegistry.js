// CustomElementRegistry对象

bodaEnv.memory.globlProtoObj["CustomElementRegistry"] = function CustomElementRegistry() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CustomElementRegistry 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CustomElementRegistry"], "CustomElementRegistry");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "define", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    define() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "CustomElementRegistry", "define", arguments);
    }
  }.define
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "CustomElementRegistry", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "upgrade", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    upgrade() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "CustomElementRegistry", "upgrade", arguments);
    }
  }.upgrade
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "whenDefined", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    whenDefined() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomElementRegistry"].prototype, "CustomElementRegistry", "whenDefined", arguments);
    }
  }.whenDefined
});