// HTMLTableCaptionElement对象

bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"] = function HTMLTableCaptionElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLTableCaptionElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"], "HTMLTableCaptionElement");
bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"].prototype, "HTMLTableCaptionElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTableCaptionElement"].prototype, "HTMLTableCaptionElement", "align_set", arguments);
    }
  }.align
});