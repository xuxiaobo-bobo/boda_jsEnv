// FontFace对象

bodaEnv.memory.globlProtoObj["FontFace"] = function FontFace() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FontFace 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FontFace"], "FontFace");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "family", {
  configurable: true,
  enumerable: true,
  get: {
    family() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "family_get", arguments);
    }
  }.family,
  set: {
    family() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "family_set", arguments);
    }
  }.family
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "style_get", arguments);
    }
  }.style,
  set: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "style_set", arguments);
    }
  }.style
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "weight", {
  configurable: true,
  enumerable: true,
  get: {
    weight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "weight_get", arguments);
    }
  }.weight,
  set: {
    weight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "weight_set", arguments);
    }
  }.weight
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "stretch", {
  configurable: true,
  enumerable: true,
  get: {
    stretch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "stretch_get", arguments);
    }
  }.stretch,
  set: {
    stretch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "stretch_set", arguments);
    }
  }.stretch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "unicodeRange", {
  configurable: true,
  enumerable: true,
  get: {
    unicodeRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "unicodeRange_get", arguments);
    }
  }.unicodeRange,
  set: {
    unicodeRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "unicodeRange_set", arguments);
    }
  }.unicodeRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "variant", {
  configurable: true,
  enumerable: true,
  get: {
    variant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "variant_get", arguments);
    }
  }.variant,
  set: {
    variant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "variant_set", arguments);
    }
  }.variant
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "featureSettings", {
  configurable: true,
  enumerable: true,
  get: {
    featureSettings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "featureSettings_get", arguments);
    }
  }.featureSettings,
  set: {
    featureSettings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "featureSettings_set", arguments);
    }
  }.featureSettings
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "display", {
  configurable: true,
  enumerable: true,
  get: {
    display() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "display_get", arguments);
    }
  }.display,
  set: {
    display() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "display_set", arguments);
    }
  }.display
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "ascentOverride", {
  configurable: true,
  enumerable: true,
  get: {
    ascentOverride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "ascentOverride_get", arguments);
    }
  }.ascentOverride,
  set: {
    ascentOverride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "ascentOverride_set", arguments);
    }
  }.ascentOverride
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "descentOverride", {
  configurable: true,
  enumerable: true,
  get: {
    descentOverride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "descentOverride_get", arguments);
    }
  }.descentOverride,
  set: {
    descentOverride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "descentOverride_set", arguments);
    }
  }.descentOverride
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "lineGapOverride", {
  configurable: true,
  enumerable: true,
  get: {
    lineGapOverride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "lineGapOverride_get", arguments);
    }
  }.lineGapOverride,
  set: {
    lineGapOverride() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "lineGapOverride_set", arguments);
    }
  }.lineGapOverride
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "sizeAdjust", {
  configurable: true,
  enumerable: true,
  get: {
    sizeAdjust() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "sizeAdjust_get", arguments);
    }
  }.sizeAdjust,
  set: {
    sizeAdjust() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "sizeAdjust_set", arguments);
    }
  }.sizeAdjust
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "status_get", arguments);
    }
  }.status,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "loaded", {
  configurable: true,
  enumerable: true,
  get: {
    loaded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "loaded_get", arguments);
    }
  }.loaded,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FontFace"].prototype, "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    load() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FontFace"].prototype, "FontFace", "load", arguments);
    }
  }.load
});