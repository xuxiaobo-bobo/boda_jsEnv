// CSSTranslate对象

bodaEnv.memory.globlProtoObj["CSSTranslate"] = function CSSTranslate() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSTranslate 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSTranslate"], "CSSTranslate");
bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype;
bodaEnv.memory.globlProtoObj["CSSTranslate"].__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "CSSTranslate", "x_get", arguments);
    }
  }.x,
  set: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "CSSTranslate", "x_set", arguments);
    }
  }.x
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "CSSTranslate", "y_get", arguments);
    }
  }.y,
  set: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "CSSTranslate", "y_set", arguments);
    }
  }.y
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "z", {
  configurable: true,
  enumerable: true,
  get: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "CSSTranslate", "z_get", arguments);
    }
  }.z,
  set: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTranslate"].prototype, "CSSTranslate", "z_set", arguments);
    }
  }.z
});