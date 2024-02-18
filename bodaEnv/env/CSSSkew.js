// CSSSkew对象

bodaEnv.memory.globlProtoObj["CSSSkew"] = function CSSSkew() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSSkew 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSSkew"], "CSSSkew");
bodaEnv.memory.globlProtoObj["CSSSkew"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype;
bodaEnv.memory.globlProtoObj["CSSSkew"].__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSSkew"].prototype, "ax", {
  configurable: true,
  enumerable: true,
  get: {
    ax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkew"].prototype, "CSSSkew", "ax_get", arguments);
    }
  }.ax,
  set: {
    ax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkew"].prototype, "CSSSkew", "ax_set", arguments);
    }
  }.ax
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSSkew"].prototype, "ay", {
  configurable: true,
  enumerable: true,
  get: {
    ay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkew"].prototype, "CSSSkew", "ay_get", arguments);
    }
  }.ay,
  set: {
    ay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkew"].prototype, "CSSSkew", "ay_set", arguments);
    }
  }.ay
});