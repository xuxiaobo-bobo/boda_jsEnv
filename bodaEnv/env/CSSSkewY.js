// CSSSkewY对象

bodaEnv.memory.globlProtoObj["CSSSkewY"] = function CSSSkewY() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSSkewY 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSSkewY"], "CSSSkewY");
bodaEnv.memory.globlProtoObj["CSSSkewY"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype;
bodaEnv.memory.globlProtoObj["CSSSkewY"].__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSSkewY"].prototype, "ay", {
  configurable: true,
  enumerable: true,
  get: {
    ay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkewY"].prototype, "CSSSkewY", "ay_get", arguments);
    }
  }.ay,
  set: {
    ay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkewY"].prototype, "CSSSkewY", "ay_set", arguments);
    }
  }.ay
});