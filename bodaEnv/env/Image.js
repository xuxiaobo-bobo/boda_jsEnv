// Image对象

bodaEnv.memory.globlProtoObj["Image"] = function Image() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Image 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
  //debugger
  let resEle = bodaEnv.memory.tempDocument.createElement('img');
  //debugger
  let newNode = bodaEnv.toolsFunc.setProto(resEle.nodeName);
  bodaEnv.memory.WeakMap.set(resEle, newNode);
  bodaEnv.memory.WeakMap.set(newNode, resEle);
  return newNode;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Image"], "Image");
bodaEnv.memory.globlProtoObj["Image"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: {
    alt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "alt_get", arguments);
    }
  }.alt,
  set: {
    alt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "alt_set", arguments);
    }
  }.alt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "src_get", arguments);
    }
  }.src,
  set: {
    src() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "src_set", arguments);
    }
  }.src
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "srcset", {
  configurable: true,
  enumerable: true,
  get: {
    srcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "srcset_get", arguments);
    }
  }.srcset,
  set: {
    srcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "srcset_set", arguments);
    }
  }.srcset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "sizes_get", arguments);
    }
  }.sizes,
  set: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "sizes_set", arguments);
    }
  }.sizes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "crossOrigin_get", arguments);
    }
  }.crossOrigin,
  set: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "crossOrigin_set", arguments);
    }
  }.crossOrigin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "useMap_get", arguments);
    }
  }.useMap,
  set: {
    useMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "useMap_set", arguments);
    }
  }.useMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "isMap", {
  configurable: true,
  enumerable: true,
  get: {
    isMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "isMap_get", arguments);
    }
  }.isMap,
  set: {
    isMap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "isMap_set", arguments);
    }
  }.isMap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "height_set", arguments);
    }
  }.height
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: {
    naturalWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "naturalWidth_get", arguments);
    }
  }.naturalWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: {
    naturalHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "naturalHeight_get", arguments);
    }
  }.naturalHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "complete", {
  configurable: true,
  enumerable: true,
  get: {
    complete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "complete_get", arguments);
    }
  }.complete,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "currentSrc", {
  configurable: true,
  enumerable: true,
  get: {
    currentSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "currentSrc_get", arguments);
    }
  }.currentSrc,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "referrerPolicy_get", arguments);
    }
  }.referrerPolicy,
  set: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "referrerPolicy_set", arguments);
    }
  }.referrerPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "decoding", {
  configurable: true,
  enumerable: true,
  get: {
    decoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "decoding_get", arguments);
    }
  }.decoding,
  set: {
    decoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "decoding_set", arguments);
    }
  }.decoding
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "fetchPriority_get", arguments);
    }
  }.fetchPriority,
  set: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "fetchPriority_set", arguments);
    }
  }.fetchPriority
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "loading", {
  configurable: true,
  enumerable: true,
  get: {
    loading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "loading_get", arguments);
    }
  }.loading,
  set: {
    loading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "loading_set", arguments);
    }
  }.loading
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "lowsrc", {
  configurable: true,
  enumerable: true,
  get: {
    lowsrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "lowsrc_get", arguments);
    }
  }.lowsrc,
  set: {
    lowsrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "lowsrc_set", arguments);
    }
  }.lowsrc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "align", {
  configurable: true,
  enumerable: true,
  get: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "align_get", arguments);
    }
  }.align,
  set: {
    align() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "align_set", arguments);
    }
  }.align
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "hspace_get", arguments);
    }
  }.hspace,
  set: {
    hspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "hspace_set", arguments);
    }
  }.hspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "vspace_get", arguments);
    }
  }.vspace,
  set: {
    vspace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "vspace_set", arguments);
    }
  }.vspace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: {
    longDesc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "longDesc_get", arguments);
    }
  }.longDesc,
  set: {
    longDesc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "longDesc_set", arguments);
    }
  }.longDesc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "border", {
  configurable: true,
  enumerable: true,
  get: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "border_get", arguments);
    }
  }.border,
  set: {
    border() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "border_set", arguments);
    }
  }.border
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "decode", arguments);
    }
  }.decode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Image"].prototype, "attributionSrc", {
  configurable: true,
  enumerable: true,
  get: {
    attributionSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "attributionSrc_get", arguments);
    }
  }.attributionSrc,
  set: {
    attributionSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Image"].prototype, "Image", "attributionSrc_set", arguments);
    }
  }.attributionSrc
});