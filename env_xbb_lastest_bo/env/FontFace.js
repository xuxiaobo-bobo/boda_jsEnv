// FontFace对象

FontFace = function FontFace() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FontFace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FontFace': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FontFace 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FontFace, "FontFace");
bodavm.toolsFunc.defineProperty(FontFace.prototype, "family", {
  configurable: true,
  enumerable: true,
  get: function family() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "family_get", arguments);
  },
  set: function family() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "family_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "style_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "weight", {
  configurable: true,
  enumerable: true,
  get: function weight() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "weight_get", arguments);
  },
  set: function weight() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "weight_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "stretch", {
  configurable: true,
  enumerable: true,
  get: function stretch() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "stretch_get", arguments);
  },
  set: function stretch() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "stretch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "unicodeRange", {
  configurable: true,
  enumerable: true,
  get: function unicodeRange() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "unicodeRange_get", arguments);
  },
  set: function unicodeRange() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "unicodeRange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "variant", {
  configurable: true,
  enumerable: true,
  get: function variant() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "variant_get", arguments);
  },
  set: function variant() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "variant_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "featureSettings", {
  configurable: true,
  enumerable: true,
  get: function featureSettings() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "featureSettings_get", arguments);
  },
  set: function featureSettings() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "featureSettings_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "display", {
  configurable: true,
  enumerable: true,
  get: function display() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "display_get", arguments);
  },
  set: function display() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "display_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "ascentOverride", {
  configurable: true,
  enumerable: true,
  get: function ascentOverride() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "ascentOverride_get", arguments);
  },
  set: function ascentOverride() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "ascentOverride_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "descentOverride", {
  configurable: true,
  enumerable: true,
  get: function descentOverride() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "descentOverride_get", arguments);
  },
  set: function descentOverride() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "descentOverride_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "lineGapOverride", {
  configurable: true,
  enumerable: true,
  get: function lineGapOverride() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "lineGapOverride_get", arguments);
  },
  set: function lineGapOverride() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "lineGapOverride_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "sizeAdjust", {
  configurable: true,
  enumerable: true,
  get: function sizeAdjust() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "sizeAdjust_get", arguments);
  },
  set: function sizeAdjust() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "sizeAdjust_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "status_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "loaded", {
  configurable: true,
  enumerable: true,
  get: function loaded() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "loaded_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FontFace.prototype, "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function load() {
    return bodavm.toolsFunc.dispatch(this, FontFace.prototype, "FontFace", "load", arguments);
  }
});