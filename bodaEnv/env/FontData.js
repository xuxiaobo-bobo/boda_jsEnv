// FontData对象

bodaEnv.memory.globlProtoObj["FontData"] = function FontData() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FontData 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FontData"], "FontData");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontData"].prototype, "postscriptName", {
  configurable: true,
  enumerable: true,
  get: {
    postscriptName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontData"].prototype, "FontData", "postscriptName_get", arguments);
    }
  }.postscriptName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontData"].prototype, "fullName", {
  configurable: true,
  enumerable: true,
  get: {
    fullName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontData"].prototype, "FontData", "fullName_get", arguments);
    }
  }.fullName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontData"].prototype, "family", {
  configurable: true,
  enumerable: true,
  get: {
    family() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontData"].prototype, "FontData", "family_get", arguments);
    }
  }.family,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontData"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontData"].prototype, "FontData", "style_get", arguments);
    }
  }.style,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontData"].prototype, "blob", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blob() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontData"].prototype, "FontData", "blob", arguments);
    }
  }.blob
});