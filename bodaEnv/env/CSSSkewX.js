// CSSSkewX对象

bodaEnv.memory.globlProtoObj["CSSSkewX"] = function CSSSkewX() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSSkewX 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSSkewX"], "CSSSkewX");
bodaEnv.memory.globlProtoObj["CSSSkewX"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype;
bodaEnv.memory.globlProtoObj["CSSSkewX"].__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSSkewX"].prototype, "ax", {
  configurable: true,
  enumerable: true,
  get: {
    ax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkewX"].prototype, "CSSSkewX", "ax_get", arguments);
    }
  }.ax,
  set: {
    ax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSSkewX"].prototype, "CSSSkewX", "ax_set", arguments);
    }
  }.ax
});