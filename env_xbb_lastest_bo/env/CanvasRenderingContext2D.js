// CanvasRenderingContext2D对象

CanvasRenderingContext2D = function CanvasRenderingContext2D() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CanvasRenderingContext2D)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CanvasRenderingContext2D 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CanvasRenderingContext2D, "CanvasRenderingContext2D");
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "canvas_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
  configurable: true,
  enumerable: true,
  get: function globalAlpha() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalAlpha_get", arguments);
  },
  set: function globalAlpha() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalAlpha_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalCompositeOperation", {
  configurable: true,
  enumerable: true,
  get: function globalCompositeOperation() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalCompositeOperation_get", arguments);
  },
  set: function globalCompositeOperation() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "globalCompositeOperation_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "filter", {
  configurable: true,
  enumerable: true,
  get: function filter() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "filter_get", arguments);
  },
  set: function filter() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "filter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {
  configurable: true,
  enumerable: true,
  get: function imageSmoothingEnabled() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingEnabled_get", arguments);
  },
  set: function imageSmoothingEnabled() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingEnabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {
  configurable: true,
  enumerable: true,
  get: function imageSmoothingQuality() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingQuality_get", arguments);
  },
  set: function imageSmoothingQuality() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "imageSmoothingQuality_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {
  configurable: true,
  enumerable: true,
  get: function strokeStyle() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeStyle_get", arguments);
  },
  set: function strokeStyle() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeStyle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
  configurable: true,
  enumerable: true,
  get: function fillStyle() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillStyle_get", arguments);
  },
  set: function fillStyle() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillStyle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {
  configurable: true,
  enumerable: true,
  get: function shadowOffsetX() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetX_get", arguments);
  },
  set: function shadowOffsetX() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetX_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {
  configurable: true,
  enumerable: true,
  get: function shadowOffsetY() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetY_get", arguments);
  },
  set: function shadowOffsetY() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowOffsetY_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {
  configurable: true,
  enumerable: true,
  get: function shadowBlur() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowBlur_get", arguments);
  },
  set: function shadowBlur() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowBlur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {
  configurable: true,
  enumerable: true,
  get: function shadowColor() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowColor_get", arguments);
  },
  set: function shadowColor() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "shadowColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {
  configurable: true,
  enumerable: true,
  get: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineWidth_get", arguments);
  },
  set: function lineWidth() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineWidth_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {
  configurable: true,
  enumerable: true,
  get: function lineCap() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineCap_get", arguments);
  },
  set: function lineCap() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineCap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {
  configurable: true,
  enumerable: true,
  get: function lineJoin() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineJoin_get", arguments);
  },
  set: function lineJoin() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineJoin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {
  configurable: true,
  enumerable: true,
  get: function miterLimit() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "miterLimit_get", arguments);
  },
  set: function miterLimit() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "miterLimit_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {
  configurable: true,
  enumerable: true,
  get: function lineDashOffset() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineDashOffset_get", arguments);
  },
  set: function lineDashOffset() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineDashOffset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "font", {
  configurable: true,
  enumerable: true,
  get: function font() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "font_get", arguments);
  },
  set: function font() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "font_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {
  configurable: true,
  enumerable: true,
  get: function textAlign() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textAlign_get", arguments);
  },
  set: function textAlign() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textAlign_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {
  configurable: true,
  enumerable: true,
  get: function textBaseline() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textBaseline_get", arguments);
  },
  set: function textBaseline() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textBaseline_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "direction_get", arguments);
  },
  set: function direction() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "direction_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {
  configurable: true,
  enumerable: true,
  get: function fontKerning() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontKerning_get", arguments);
  },
  set: function fontKerning() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontKerning_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {
  configurable: true,
  enumerable: true,
  get: function fontStretch() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontStretch_get", arguments);
  },
  set: function fontStretch() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontStretch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {
  configurable: true,
  enumerable: true,
  get: function fontVariantCaps() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontVariantCaps_get", arguments);
  },
  set: function fontVariantCaps() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fontVariantCaps_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {
  configurable: true,
  enumerable: true,
  get: function letterSpacing() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "letterSpacing_get", arguments);
  },
  set: function letterSpacing() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "letterSpacing_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {
  configurable: true,
  enumerable: true,
  get: function textRendering() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textRendering_get", arguments);
  },
  set: function textRendering() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "textRendering_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {
  configurable: true,
  enumerable: true,
  get: function wordSpacing() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "wordSpacing_get", arguments);
  },
  set: function wordSpacing() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "wordSpacing_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clip() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "clip", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createConicGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createConicGradient() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createConicGradient", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createImageData() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createImageData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createLinearGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createLinearGradient() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createLinearGradient", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createPattern", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPattern() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createPattern", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createRadialGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRadialGradient() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "createRadialGradient", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawFocusIfNeeded", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawFocusIfNeeded() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "drawFocusIfNeeded", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function drawImage() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "drawImage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fill() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fill", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fillText() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getContextAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContextAttributes() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getContextAttributes", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getImageData() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getImageData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getLineDash", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLineDash() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getLineDash", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransform() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "getTransform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isContextLost() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "isContextLost", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInPath() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "isPointInPath", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInStroke() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "isPointInStroke", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "measureText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function measureText() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "measureText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "putImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function putImageData() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "putImageData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "roundRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function roundRect() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "roundRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "save", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function save() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "save", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "scale", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setLineDash", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setLineDash() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "setLineDash", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTransform() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "setTransform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "stroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stroke() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "stroke", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function strokeText() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeText", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "transform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transform() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "transform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translate() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "translate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arc() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "arc", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arcTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arcTo() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "arcTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "beginPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginPath() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "beginPath", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "bezierCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bezierCurveTo() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "bezierCurveTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clearRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearRect() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "clearRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "closePath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function closePath() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "closePath", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "ellipse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function ellipse() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "ellipse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fillRect() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "fillRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lineTo() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "lineTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function moveTo() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "moveTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "quadraticCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function quadraticCurveTo() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "quadraticCurveTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rect() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "rect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "resetTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resetTransform() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "resetTransform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "restore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function restore() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "restore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotate() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "rotate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function strokeRect() {
    return bodavm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D", "strokeRect", arguments);
  }
});