// CSSPerspective对象

bodaEnv.memory.globlProtoObj["CSSPerspective"] = function CSSPerspective() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSPerspective 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSPerspective"], "CSSPerspective");
bodaEnv.memory.globlProtoObj["CSSPerspective"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype;
bodaEnv.memory.globlProtoObj["CSSPerspective"].__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPerspective"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPerspective"].prototype, "CSSPerspective", "length_get", arguments);
    }
  }.length,
  set: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPerspective"].prototype, "CSSPerspective", "length_set", arguments);
    }
  }.length
});