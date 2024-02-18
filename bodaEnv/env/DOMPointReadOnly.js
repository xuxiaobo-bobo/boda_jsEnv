// DOMPointReadOnly对象

bodaEnv.memory.globlProtoObj["DOMPointReadOnly"] = function DOMPointReadOnly() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMPointReadOnly 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"], "DOMPointReadOnly");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"], "fromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMQuad"], "DOMPointReadOnly", "fromPoint", arguments);
    }
  }.fromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "DOMPointReadOnly", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "DOMPointReadOnly", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "z", {
  configurable: true,
  enumerable: true,
  get: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "DOMPointReadOnly", "z_get", arguments);
    }
  }.z,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "w", {
  configurable: true,
  enumerable: true,
  get: {
    w() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "DOMPointReadOnly", "w_get", arguments);
    }
  }.w,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "matrixTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    matrixTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "DOMPointReadOnly", "matrixTransform", arguments);
    }
  }.matrixTransform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype, "DOMPointReadOnly", "toJSON", arguments);
    }
  }.toJSON
});