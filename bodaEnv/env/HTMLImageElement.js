// HTMLImageElement对象

bodaEnv.memory.globlProtoObj["HTMLImageElement"] = function HTMLImageElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLImageElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLImageElement"], "HTMLImageElement");
bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLImageElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: {
    alt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "alt_get", arguments);
    }
  }.alt,
  set: {
    alt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "alt_set", arguments);
    }
  }.alt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "srcset", {
  configurable: true,
  enumerable: true,
  get: {
    srcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "srcset_get", arguments);
    }
  }.srcset,
  set: {
    srcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "srcset_set", arguments);
    }
  }.srcset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "sizes_get", arguments);
    }
  }.sizes,
  set: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "sizes_set", arguments);
    }
  }.sizes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "crossOrigin_get", arguments);
    }
  }.crossOrigin,
  set: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "crossOrigin_set", arguments);
    }
  }.crossOrigin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "useMap_get", arguments);
    }
  }.useMap,
  set: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "useMap_set", arguments);
    }
  }.useMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "isMap", {
  configurable: true,
  enumerable: true,
  get: {
    isMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "isMap_get", arguments);
    }
  }.isMap,
  set: {
    isMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "isMap_set", arguments);
    }
  }.isMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: {
    naturalWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "naturalWidth_get", arguments);
    }
  }.naturalWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: {
    naturalHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "naturalHeight_get", arguments);
    }
  }.naturalHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "complete", {
  configurable: true,
  enumerable: true,
  get: {
    complete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "complete_get", arguments);
    }
  }.complete,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "currentSrc", {
  configurable: true,
  enumerable: true,
  get: {
    currentSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "currentSrc_get", arguments);
    }
  }.currentSrc,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "referrerPolicy_get", arguments);
    }
  }.referrerPolicy,
  set: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "referrerPolicy_set", arguments);
    }
  }.referrerPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "decoding", {
  configurable: true,
  enumerable: true,
  get: {
    decoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "decoding_get", arguments);
    }
  }.decoding,
  set: {
    decoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "decoding_set", arguments);
    }
  }.decoding
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "fetchPriority_get", arguments);
    }
  }.fetchPriority,
  set: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "fetchPriority_set", arguments);
    }
  }.fetchPriority
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "loading", {
  configurable: true,
  enumerable: true,
  get: {
    loading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "loading_get", arguments);
    }
  }.loading,
  set: {
    loading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "loading_set", arguments);
    }
  }.loading
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "lowsrc", {
  configurable: true,
  enumerable: true,
  get: {
    lowsrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "lowsrc_get", arguments);
    }
  }.lowsrc,
  set: {
    lowsrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "lowsrc_set", arguments);
    }
  }.lowsrc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "hspace_get", arguments);
    }
  }.hspace,
  set: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "hspace_set", arguments);
    }
  }.hspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "vspace_get", arguments);
    }
  }.vspace,
  set: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "vspace_set", arguments);
    }
  }.vspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: {
    longDesc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "longDesc_get", arguments);
    }
  }.longDesc,
  set: {
    longDesc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "longDesc_set", arguments);
    }
  }.longDesc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "border", {
  configurable: true,
  enumerable: true,
  get: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "border_get", arguments);
    }
  }.border,
  set: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "border_set", arguments);
    }
  }.border
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "decode", arguments);
    }
  }.decode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "decode", arguments);
    }
  }.decode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "attributionSrc", {
  configurable: true,
  enumerable: true,
  get: {
    attributionSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "attributionSrc_get", arguments);
    }
  }.attributionSrc,
  set: {
    attributionSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLImageElement"].prototype, "HTMLImageElement", "attributionSrc_set", arguments);
    }
  }.attributionSrc
});