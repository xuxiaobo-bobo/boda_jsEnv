// CSSAnimation对象

bodaEnv.memory.globlProtoObj["CSSAnimation"] = function CSSAnimation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSAnimation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSAnimation"], "CSSAnimation");
bodaEnv.memory.globlProtoObj["CSSAnimation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Animation"].prototype;
bodaEnv.memory.globlProtoObj["CSSAnimation"].__proto__ = bodaEnv.memory.globlProtoObj["Animation"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSAnimation"].prototype, "animationName", {
  configurable: true,
  enumerable: true,
  get: {
    animationName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSAnimation"].prototype, "CSSAnimation", "animationName_get", arguments);
    }
  }.animationName,
  set: undefined
});