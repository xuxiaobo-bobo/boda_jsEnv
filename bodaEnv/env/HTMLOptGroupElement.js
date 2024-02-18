// HTMLOptGroupElement对象

bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"] = function HTMLOptGroupElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLOptGroupElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"], "HTMLOptGroupElement");
bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype, "HTMLOptGroupElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype, "HTMLOptGroupElement", "disabled_set", arguments);
    }
  }.disabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype, "HTMLOptGroupElement", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptGroupElement"].prototype, "HTMLOptGroupElement", "label_set", arguments);
    }
  }.label
});