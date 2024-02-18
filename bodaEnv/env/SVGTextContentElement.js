// SVGTextContentElement对象

bodaEnv.memory.globlProtoObj["SVGTextContentElement"] = function SVGTextContentElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTextContentElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTextContentElement"], "SVGTextContentElement");
bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGTextContentElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"], "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"], "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"], "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "textLength", {
  configurable: true,
  enumerable: true,
  get: {
    textLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "textLength_get", arguments);
    }
  }.textLength,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "lengthAdjust", {
  configurable: true,
  enumerable: true,
  get: {
    lengthAdjust() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "lengthAdjust_get", arguments);
    }
  }.lengthAdjust,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getCharNumAtPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCharNumAtPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getCharNumAtPosition", arguments);
    }
  }.getCharNumAtPosition
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getComputedTextLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getComputedTextLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getComputedTextLength", arguments);
    }
  }.getComputedTextLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getEndPositionOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEndPositionOfChar() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getEndPositionOfChar", arguments);
    }
  }.getEndPositionOfChar
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getExtentOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getExtentOfChar() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getExtentOfChar", arguments);
    }
  }.getExtentOfChar
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getNumberOfChars", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getNumberOfChars() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getNumberOfChars", arguments);
    }
  }.getNumberOfChars
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getRotationOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRotationOfChar() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getRotationOfChar", arguments);
    }
  }.getRotationOfChar
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getStartPositionOfChar", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getStartPositionOfChar() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getStartPositionOfChar", arguments);
    }
  }.getStartPositionOfChar
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "getSubStringLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSubStringLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "getSubStringLength", arguments);
    }
  }.getSubStringLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "selectSubString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectSubString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype, "SVGTextContentElement", "selectSubString", arguments);
    }
  }.selectSubString
});