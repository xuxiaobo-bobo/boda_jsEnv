// FontFaceSetLoadEvent对象

bodaEnv.memory.globlProtoObj["FontFaceSetLoadEvent"] = function FontFaceSetLoadEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FontFaceSetLoadEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FontFaceSetLoadEvent"], "FontFaceSetLoadEvent");
bodaEnv.memory.globlProtoObj["FontFaceSetLoadEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["FontFaceSetLoadEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFaceSetLoadEvent"].prototype, "fontfaces", {
  configurable: true,
  enumerable: true,
  get: {
    fontfaces() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFaceSetLoadEvent"].prototype, "FontFaceSetLoadEvent", "fontfaces_get", arguments);
    }
  }.fontfaces,
  set: undefined
});