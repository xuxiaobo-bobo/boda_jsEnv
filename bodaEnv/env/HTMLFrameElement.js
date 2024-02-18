// HTMLFrameElement对象

bodaEnv.memory.globlProtoObj["HTMLFrameElement"] = function HTMLFrameElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLFrameElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLFrameElement"], "HTMLFrameElement");
bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLFrameElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "scrolling", {
  configurable: true,
  enumerable: true,
  get: {
    scrolling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "scrolling_get", arguments);
    }
  }.scrolling,
  set: {
    scrolling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "scrolling_set", arguments);
    }
  }.scrolling
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "frameBorder", {
  configurable: true,
  enumerable: true,
  get: {
    frameBorder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "frameBorder_get", arguments);
    }
  }.frameBorder,
  set: {
    frameBorder() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "frameBorder_set", arguments);
    }
  }.frameBorder
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: {
    longDesc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "longDesc_get", arguments);
    }
  }.longDesc,
  set: {
    longDesc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "longDesc_set", arguments);
    }
  }.longDesc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "noResize", {
  configurable: true,
  enumerable: true,
  get: {
    noResize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "noResize_get", arguments);
    }
  }.noResize,
  set: {
    noResize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "noResize_set", arguments);
    }
  }.noResize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "contentDocument", {
  configurable: true,
  enumerable: true,
  get: {
    contentDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "contentDocument_get", arguments);
    }
  }.contentDocument,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "contentWindow", {
  configurable: true,
  enumerable: true,
  get: {
    contentWindow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "contentWindow_get", arguments);
    }
  }.contentWindow,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "marginHeight", {
  configurable: true,
  enumerable: true,
  get: {
    marginHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "marginHeight_get", arguments);
    }
  }.marginHeight,
  set: {
    marginHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "marginHeight_set", arguments);
    }
  }.marginHeight
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "marginWidth", {
  configurable: true,
  enumerable: true,
  get: {
    marginWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "marginWidth_get", arguments);
    }
  }.marginWidth,
  set: {
    marginWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLFrameElement"].prototype, "HTMLFrameElement", "marginWidth_set", arguments);
    }
  }.marginWidth
});