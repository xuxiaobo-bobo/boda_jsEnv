// HTMLLinkElement对象

bodaEnv.memory.globlProtoObj["HTMLLinkElement"] = function HTMLLinkElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLLinkElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLLinkElement"], "HTMLLinkElement");
bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLLinkElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "disabled_set", arguments);
    }
  }.disabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "href_get", arguments);
    }
  }.href,
  set: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "href_set", arguments);
    }
  }.href
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "crossOrigin_get", arguments);
    }
  }.crossOrigin,
  set: {
    crossOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "crossOrigin_set", arguments);
    }
  }.crossOrigin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: {
    rel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "rel_get", arguments);
    }
  }.rel,
  set: {
    rel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "rel_set", arguments);
    }
  }.rel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: {
    relList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "relList_get", arguments);
    }
  }.relList,
  set: {
    relList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "relList_set", arguments);
    }
  }.relList
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "hreflang", {
  configurable: true,
  enumerable: true,
  get: {
    hreflang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "hreflang_get", arguments);
    }
  }.hreflang,
  set: {
    hreflang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "hreflang_set", arguments);
    }
  }.hreflang
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "as", {
  configurable: true,
  enumerable: true,
  get: {
    as() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "as_get", arguments);
    }
  }.as,
  set: {
    as() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "as_set", arguments);
    }
  }.as
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "referrerPolicy_get", arguments);
    }
  }.referrerPolicy,
  set: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "referrerPolicy_set", arguments);
    }
  }.referrerPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "sizes_get", arguments);
    }
  }.sizes,
  set: {
    sizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "sizes_set", arguments);
    }
  }.sizes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "fetchPriority_get", arguments);
    }
  }.fetchPriority,
  set: {
    fetchPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "fetchPriority_set", arguments);
    }
  }.fetchPriority
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "imageSrcset", {
  configurable: true,
  enumerable: true,
  get: {
    imageSrcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "imageSrcset_get", arguments);
    }
  }.imageSrcset,
  set: {
    imageSrcset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "imageSrcset_set", arguments);
    }
  }.imageSrcset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "imageSizes", {
  configurable: true,
  enumerable: true,
  get: {
    imageSizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "imageSizes_get", arguments);
    }
  }.imageSizes,
  set: {
    imageSizes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "imageSizes_set", arguments);
    }
  }.imageSizes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "charset_get", arguments);
    }
  }.charset,
  set: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "charset_set", arguments);
    }
  }.charset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "rev", {
  configurable: true,
  enumerable: true,
  get: {
    rev() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "rev_get", arguments);
    }
  }.rev,
  set: {
    rev() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "rev_set", arguments);
    }
  }.rev
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "target_get", arguments);
    }
  }.target,
  set: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "target_set", arguments);
    }
  }.target
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: {
    sheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "sheet_get", arguments);
    }
  }.sheet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "integrity", {
  configurable: true,
  enumerable: true,
  get: {
    integrity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "integrity_get", arguments);
    }
  }.integrity,
  set: {
    integrity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "integrity_set", arguments);
    }
  }.integrity
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "blocking", {
  configurable: true,
  enumerable: true,
  get: {
    blocking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "blocking_get", arguments);
    }
  }.blocking,
  set: {
    blocking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLLinkElement"].prototype, "HTMLLinkElement", "blocking_set", arguments);
    }
  }.blocking
});