// PresentationAvailability对象

bodaEnv.memory.globlProtoObj["PresentationAvailability"] = function PresentationAvailability() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationAvailability 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationAvailability"], "PresentationAvailability");
bodaEnv.memory.globlProtoObj["PresentationAvailability"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PresentationAvailability"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationAvailability"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationAvailability"].prototype, "PresentationAvailability", "value_get", arguments);
    }
  }.value,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationAvailability"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationAvailability"].prototype, "PresentationAvailability", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationAvailability"].prototype, "PresentationAvailability", "onchange_set", arguments);
    }
  }.onchange
});