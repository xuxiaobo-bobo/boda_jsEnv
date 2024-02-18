// HTMLLabelElement对象

bodaEnv.memory.globlProtoObj["HTMLLabelElement"] = function HTMLLabelElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLLabelElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLLabelElement"], "HTMLLabelElement");
bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLLabelElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "form", {
  configurable: true,
  enumerable: true,
  get: {
    form() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "HTMLLabelElement", "form_get", arguments);
    }
  }.form,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "htmlFor", {
  configurable: true,
  enumerable: true,
  get: {
    htmlFor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "HTMLLabelElement", "htmlFor_get", arguments);
    }
  }.htmlFor,
  set: {
    htmlFor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "HTMLLabelElement", "htmlFor_set", arguments);
    }
  }.htmlFor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "control", {
  configurable: true,
  enumerable: true,
  get: {
    control() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLabelElement"].prototype, "HTMLLabelElement", "control_get", arguments);
    }
  }.control,
  set: undefined
});