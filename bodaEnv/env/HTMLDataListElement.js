// HTMLDataListElement对象

bodaEnv.memory.globlProtoObj["HTMLDataListElement"] = function HTMLDataListElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLDataListElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLDataListElement"], "HTMLDataListElement");
bodaEnv.memory.globlProtoObj["HTMLDataListElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLDataListElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDataListElement"].prototype, "options", {
  configurable: true,
  enumerable: true,
  get: {
    options() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDataListElement"].prototype, "HTMLDataListElement", "options_get", arguments);
    }
  }.options,
  set: undefined
});