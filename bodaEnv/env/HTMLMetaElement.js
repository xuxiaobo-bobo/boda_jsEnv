// HTMLMetaElement对象

bodaEnv.memory.globlProtoObj["HTMLMetaElement"] = function HTMLMetaElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLMetaElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLMetaElement"], "HTMLMetaElement");
bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLMetaElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "httpEquiv", {
  configurable: true,
  enumerable: true,
  get: {
    httpEquiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "httpEquiv_get", arguments);
    }
  }.httpEquiv,
  set: {
    httpEquiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "httpEquiv_set", arguments);
    }
  }.httpEquiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "content", {
  configurable: true,
  enumerable: true,
  get: {
    content() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "content_get", arguments);
    }
  }.content,
  set: {
    content() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "content_set", arguments);
    }
  }.content
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "scheme", {
  configurable: true,
  enumerable: true,
  get: {
    scheme() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "scheme_get", arguments);
    }
  }.scheme,
  set: {
    scheme() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMetaElement"].prototype, "HTMLMetaElement", "scheme_set", arguments);
    }
  }.scheme
});