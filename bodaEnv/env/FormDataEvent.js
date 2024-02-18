// FormDataEvent对象

bodaEnv.memory.globlProtoObj["FormDataEvent"] = function FormDataEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FormDataEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FormDataEvent"], "FormDataEvent");
bodaEnv.memory.globlProtoObj["FormDataEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["FormDataEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FormDataEvent"].prototype, "formData", {
  configurable: true,
  enumerable: true,
  get: {
    formData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FormDataEvent"].prototype, "FormDataEvent", "formData_get", arguments);
    }
  }.formData,
  set: undefined
});