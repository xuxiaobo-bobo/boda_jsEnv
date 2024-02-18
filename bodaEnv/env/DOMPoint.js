// DOMPoint对象

bodaEnv.memory.globlProtoObj["DOMPoint"] = function DOMPoint() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMPoint 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMPoint"], "DOMPoint");
bodaEnv.memory.globlProtoObj["DOMPoint"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DOMPointReadOnly"].prototype;
bodaEnv.memory.globlProtoObj["DOMPoint"].__proto__ = bodaEnv.memory.globlProtoObj["DOMPointReadOnly"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPoint"], "fromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPointReadOnly"], "DOMPoint", "fromPoint", arguments);
    }
  }.fromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "x_get", arguments);
    }
  }.x,
  set: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "x_set", arguments);
    }
  }.x
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "y_get", arguments);
    }
  }.y,
  set: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "y_set", arguments);
    }
  }.y
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "z", {
  configurable: true,
  enumerable: true,
  get: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "z_get", arguments);
    }
  }.z,
  set: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "z_set", arguments);
    }
  }.z
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "w", {
  configurable: true,
  enumerable: true,
  get: {
    w() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "w_get", arguments);
    }
  }.w,
  set: {
    w() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMPoint"].prototype, "DOMPoint", "w_set", arguments);
    }
  }.w
});