// HTMLSourceElement对象

bodaEnv.memory.globlProtoObj["HTMLSourceElement"] = function HTMLSourceElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLSourceElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLSourceElement"], "HTMLSourceElement");
bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLSourceElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "srcset", {
  configurable: true,
  enumerable: true,
  get: {
    srcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "srcset_get", arguments);
    }
  }.srcset,
  set: {
    srcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "srcset_set", arguments);
    }
  }.srcset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "sizes_get", arguments);
    }
  }.sizes,
  set: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "sizes_set", arguments);
    }
  }.sizes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLSourceElement"].prototype, "HTMLSourceElement", "height_set", arguments);
    }
  }.height
});