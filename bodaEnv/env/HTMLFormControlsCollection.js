// HTMLFormControlsCollection对象

bodaEnv.memory.globlProtoObj["HTMLFormControlsCollection"] = function HTMLFormControlsCollection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLFormControlsCollection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLFormControlsCollection"], "HTMLFormControlsCollection");
bodaEnv.memory.globlProtoObj["HTMLFormControlsCollection"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype;
bodaEnv.memory.globlProtoObj["HTMLFormControlsCollection"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLCollection"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFormControlsCollection"].prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    namedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFormControlsCollection"].prototype, "HTMLFormControlsCollection", "namedItem", arguments);
    }
  }.namedItem
});