// OffscreenCanvasRenderingContext2D对象

bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"] = function OffscreenCanvasRenderingContext2D() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OffscreenCanvasRenderingContext2D 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"], "OffscreenCanvasRenderingContext2D");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: {
    canvas() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "canvas_get", arguments);
    }
  }.canvas,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "globalAlpha", {
  configurable: true,
  enumerable: true,
  get: {
    globalAlpha() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "globalAlpha_get", arguments);
    }
  }.globalAlpha,
  set: {
    globalAlpha() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "globalAlpha_set", arguments);
    }
  }.globalAlpha
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "globalCompositeOperation", {
  configurable: true,
  enumerable: true,
  get: {
    globalCompositeOperation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "globalCompositeOperation_get", arguments);
    }
  }.globalCompositeOperation,
  set: {
    globalCompositeOperation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "globalCompositeOperation_set", arguments);
    }
  }.globalCompositeOperation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "filter", {
  configurable: true,
  enumerable: true,
  get: {
    filter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "filter_get", arguments);
    }
  }.filter,
  set: {
    filter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "filter_set", arguments);
    }
  }.filter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "imageSmoothingEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    imageSmoothingEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingEnabled_get", arguments);
    }
  }.imageSmoothingEnabled,
  set: {
    imageSmoothingEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingEnabled_set", arguments);
    }
  }.imageSmoothingEnabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "imageSmoothingQuality", {
  configurable: true,
  enumerable: true,
  get: {
    imageSmoothingQuality() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingQuality_get", arguments);
    }
  }.imageSmoothingQuality,
  set: {
    imageSmoothingQuality() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "imageSmoothingQuality_set", arguments);
    }
  }.imageSmoothingQuality
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "strokeStyle", {
  configurable: true,
  enumerable: true,
  get: {
    strokeStyle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "strokeStyle_get", arguments);
    }
  }.strokeStyle,
  set: {
    strokeStyle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "strokeStyle_set", arguments);
    }
  }.strokeStyle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fillStyle", {
  configurable: true,
  enumerable: true,
  get: {
    fillStyle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fillStyle_get", arguments);
    }
  }.fillStyle,
  set: {
    fillStyle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fillStyle_set", arguments);
    }
  }.fillStyle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "shadowOffsetX", {
  configurable: true,
  enumerable: true,
  get: {
    shadowOffsetX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetX_get", arguments);
    }
  }.shadowOffsetX,
  set: {
    shadowOffsetX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetX_set", arguments);
    }
  }.shadowOffsetX
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "shadowOffsetY", {
  configurable: true,
  enumerable: true,
  get: {
    shadowOffsetY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetY_get", arguments);
    }
  }.shadowOffsetY,
  set: {
    shadowOffsetY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowOffsetY_set", arguments);
    }
  }.shadowOffsetY
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "shadowBlur", {
  configurable: true,
  enumerable: true,
  get: {
    shadowBlur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowBlur_get", arguments);
    }
  }.shadowBlur,
  set: {
    shadowBlur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowBlur_set", arguments);
    }
  }.shadowBlur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "shadowColor", {
  configurable: true,
  enumerable: true,
  get: {
    shadowColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowColor_get", arguments);
    }
  }.shadowColor,
  set: {
    shadowColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "shadowColor_set", arguments);
    }
  }.shadowColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "lineWidth", {
  configurable: true,
  enumerable: true,
  get: {
    lineWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineWidth_get", arguments);
    }
  }.lineWidth,
  set: {
    lineWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineWidth_set", arguments);
    }
  }.lineWidth
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "lineCap", {
  configurable: true,
  enumerable: true,
  get: {
    lineCap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineCap_get", arguments);
    }
  }.lineCap,
  set: {
    lineCap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineCap_set", arguments);
    }
  }.lineCap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "lineJoin", {
  configurable: true,
  enumerable: true,
  get: {
    lineJoin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineJoin_get", arguments);
    }
  }.lineJoin,
  set: {
    lineJoin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineJoin_set", arguments);
    }
  }.lineJoin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "miterLimit", {
  configurable: true,
  enumerable: true,
  get: {
    miterLimit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "miterLimit_get", arguments);
    }
  }.miterLimit,
  set: {
    miterLimit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "miterLimit_set", arguments);
    }
  }.miterLimit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "lineDashOffset", {
  configurable: true,
  enumerable: true,
  get: {
    lineDashOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineDashOffset_get", arguments);
    }
  }.lineDashOffset,
  set: {
    lineDashOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineDashOffset_set", arguments);
    }
  }.lineDashOffset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "font", {
  configurable: true,
  enumerable: true,
  get: {
    font() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "font_get", arguments);
    }
  }.font,
  set: {
    font() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "font_set", arguments);
    }
  }.font
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "textAlign", {
  configurable: true,
  enumerable: true,
  get: {
    textAlign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "textAlign_get", arguments);
    }
  }.textAlign,
  set: {
    textAlign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "textAlign_set", arguments);
    }
  }.textAlign
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "textBaseline", {
  configurable: true,
  enumerable: true,
  get: {
    textBaseline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "textBaseline_get", arguments);
    }
  }.textBaseline,
  set: {
    textBaseline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "textBaseline_set", arguments);
    }
  }.textBaseline
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "direction_get", arguments);
    }
  }.direction,
  set: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "direction_set", arguments);
    }
  }.direction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fontKerning", {
  configurable: true,
  enumerable: true,
  get: {
    fontKerning() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fontKerning_get", arguments);
    }
  }.fontKerning,
  set: {
    fontKerning() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fontKerning_set", arguments);
    }
  }.fontKerning
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fontStretch", {
  configurable: true,
  enumerable: true,
  get: {
    fontStretch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fontStretch_get", arguments);
    }
  }.fontStretch,
  set: {
    fontStretch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fontStretch_set", arguments);
    }
  }.fontStretch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fontVariantCaps", {
  configurable: true,
  enumerable: true,
  get: {
    fontVariantCaps() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fontVariantCaps_get", arguments);
    }
  }.fontVariantCaps,
  set: {
    fontVariantCaps() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fontVariantCaps_set", arguments);
    }
  }.fontVariantCaps
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "letterSpacing", {
  configurable: true,
  enumerable: true,
  get: {
    letterSpacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "letterSpacing_get", arguments);
    }
  }.letterSpacing,
  set: {
    letterSpacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "letterSpacing_set", arguments);
    }
  }.letterSpacing
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "textRendering", {
  configurable: true,
  enumerable: true,
  get: {
    textRendering() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "textRendering_get", arguments);
    }
  }.textRendering,
  set: {
    textRendering() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "textRendering_set", arguments);
    }
  }.textRendering
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "wordSpacing", {
  configurable: true,
  enumerable: true,
  get: {
    wordSpacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "wordSpacing_get", arguments);
    }
  }.wordSpacing,
  set: {
    wordSpacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "wordSpacing_set", arguments);
    }
  }.wordSpacing
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "clip", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clip() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "clip", arguments);
    }
  }.clip
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "createConicGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createConicGradient() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "createConicGradient", arguments);
    }
  }.createConicGradient
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "createImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createImageData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "createImageData", arguments);
    }
  }.createImageData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "createLinearGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createLinearGradient() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "createLinearGradient", arguments);
    }
  }.createLinearGradient
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "createPattern", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createPattern() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "createPattern", arguments);
    }
  }.createPattern
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "createRadialGradient", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRadialGradient() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "createRadialGradient", arguments);
    }
  }.createRadialGradient
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "drawImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawImage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "drawImage", arguments);
    }
  }.drawImage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fill() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fill", arguments);
    }
  }.fill
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fillText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fillText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fillText", arguments);
    }
  }.fillText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "getImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getImageData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "getImageData", arguments);
    }
  }.getImageData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "getLineDash", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getLineDash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "getLineDash", arguments);
    }
  }.getLineDash
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "getTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "getTransform", arguments);
    }
  }.getTransform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isContextLost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "isContextLost", arguments);
    }
  }.isContextLost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "isPointInPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isPointInPath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "isPointInPath", arguments);
    }
  }.isPointInPath
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "isPointInStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isPointInStroke() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "isPointInStroke", arguments);
    }
  }.isPointInStroke
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "measureText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    measureText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "measureText", arguments);
    }
  }.measureText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "putImageData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    putImageData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "putImageData", arguments);
    }
  }.putImageData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "roundRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    roundRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "roundRect", arguments);
    }
  }.roundRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "save", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    save() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "save", arguments);
    }
  }.save
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "scale", arguments);
    }
  }.scale
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "setLineDash", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setLineDash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "setLineDash", arguments);
    }
  }.setLineDash
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "setTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "setTransform", arguments);
    }
  }.setTransform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "stroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stroke() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "stroke", arguments);
    }
  }.stroke
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "strokeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    strokeText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "strokeText", arguments);
    }
  }.strokeText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "transform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "transform", arguments);
    }
  }.transform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    translate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "translate", arguments);
    }
  }.translate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "arc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "arc", arguments);
    }
  }.arc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "arcTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    arcTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "arcTo", arguments);
    }
  }.arcTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "beginPath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginPath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "beginPath", arguments);
    }
  }.beginPath
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "bezierCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bezierCurveTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "bezierCurveTo", arguments);
    }
  }.bezierCurveTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "clearRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "clearRect", arguments);
    }
  }.clearRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "closePath", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    closePath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "closePath", arguments);
    }
  }.closePath
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "ellipse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    ellipse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "ellipse", arguments);
    }
  }.ellipse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "fillRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fillRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "fillRect", arguments);
    }
  }.fillRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "lineTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lineTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "lineTo", arguments);
    }
  }.lineTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "moveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    moveTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "moveTo", arguments);
    }
  }.moveTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "quadraticCurveTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    quadraticCurveTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "quadraticCurveTo", arguments);
    }
  }.quadraticCurveTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "rect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "rect", arguments);
    }
  }.rect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "resetTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resetTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "resetTransform", arguments);
    }
  }.resetTransform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "restore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    restore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "restore", arguments);
    }
  }.restore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rotate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "rotate", arguments);
    }
  }.rotate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "strokeRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    strokeRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OffscreenCanvasRenderingContext2D"].prototype, "OffscreenCanvasRenderingContext2D", "strokeRect", arguments);
    }
  }.strokeRect
});