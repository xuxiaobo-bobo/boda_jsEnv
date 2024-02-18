// HTMLTemplateElement对象

bodaEnv.memory.globlProtoObj["HTMLTemplateElement"] = function HTMLTemplateElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLTemplateElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLTemplateElement"], "HTMLTemplateElement");
bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "content", {
  configurable: true,
  enumerable: true,
  get: {
    content() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "HTMLTemplateElement", "content_get", arguments);
    }
  }.content,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "shadowRoot", {
  configurable: true,
  enumerable: true,
  get: {
    shadowRoot() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "HTMLTemplateElement", "shadowRoot_get", arguments);
    }
  }.shadowRoot,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "shadowRootMode", {
  configurable: true,
  enumerable: true,
  get: {
    shadowRootMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "HTMLTemplateElement", "shadowRootMode_get", arguments);
    }
  }.shadowRootMode,
  set: {
    shadowRootMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLTemplateElement"].prototype, "HTMLTemplateElement", "shadowRootMode_set", arguments);
    }
  }.shadowRootMode
});