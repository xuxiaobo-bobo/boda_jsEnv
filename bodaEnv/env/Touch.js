// Touch对象

bodaEnv.memory.globlProtoObj["Touch"] = function Touch() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Touch 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Touch"], "Touch");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "identifier", {
  configurable: true,
  enumerable: true,
  get: {
    identifier() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "identifier_get", arguments);
    }
  }.identifier,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "target_get", arguments);
    }
  }.target,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "screenX", {
  configurable: true,
  enumerable: true,
  get: {
    screenX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "screenX_get", arguments);
    }
  }.screenX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "screenY", {
  configurable: true,
  enumerable: true,
  get: {
    screenY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "screenY_get", arguments);
    }
  }.screenY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "clientX", {
  configurable: true,
  enumerable: true,
  get: {
    clientX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "clientX_get", arguments);
    }
  }.clientX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "clientY", {
  configurable: true,
  enumerable: true,
  get: {
    clientY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "clientY_get", arguments);
    }
  }.clientY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "pageX", {
  configurable: true,
  enumerable: true,
  get: {
    pageX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "pageX_get", arguments);
    }
  }.pageX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "pageY", {
  configurable: true,
  enumerable: true,
  get: {
    pageY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "pageY_get", arguments);
    }
  }.pageY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "radiusX", {
  configurable: true,
  enumerable: true,
  get: {
    radiusX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "radiusX_get", arguments);
    }
  }.radiusX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "radiusY", {
  configurable: true,
  enumerable: true,
  get: {
    radiusY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "radiusY_get", arguments);
    }
  }.radiusY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "rotationAngle", {
  configurable: true,
  enumerable: true,
  get: {
    rotationAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "rotationAngle_get", arguments);
    }
  }.rotationAngle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Touch"].prototype, "force", {
  configurable: true,
  enumerable: true,
  get: {
    force() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Touch"].prototype, "Touch", "force_get", arguments);
    }
  }.force,
  set: undefined
});