// CSSTransition对象

bodaEnv.memory.globlProtoObj["CSSTransition"] = function CSSTransition() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSTransition 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSTransition"], "CSSTransition");
bodaEnv.memory.globlProtoObj["CSSTransition"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Animation"].prototype;
bodaEnv.memory.globlProtoObj["CSSTransition"].__proto__ = bodaEnv.memory.globlProtoObj["Animation"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransition"].prototype, "transitionProperty", {
  configurable: true,
  enumerable: true,
  get: {
    transitionProperty() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransition"].prototype, "CSSTransition", "transitionProperty_get", arguments);
    }
  }.transitionProperty,
  set: undefined
});