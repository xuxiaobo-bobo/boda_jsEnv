// SVGTextPathElement对象

bodaEnv.memory.globlProtoObj["SVGTextPathElement"] = function SVGTextPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTextPathElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "SVGTextPathElement");
bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGTextPathElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGTextContentElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "TEXTPATH_SPACINGTYPE_EXACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "TEXTPATH_SPACINGTYPE_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "TEXTPATH_SPACINGTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "TEXTPATH_METHODTYPE_STRETCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "TEXTPATH_METHODTYPE_ALIGN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "TEXTPATH_METHODTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"], "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "TEXTPATH_SPACINGTYPE_EXACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "TEXTPATH_SPACINGTYPE_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "TEXTPATH_SPACINGTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "TEXTPATH_METHODTYPE_STRETCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "TEXTPATH_METHODTYPE_ALIGN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "TEXTPATH_METHODTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "startOffset", {
  configurable: true,
  enumerable: true,
  get: {
    startOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "SVGTextPathElement", "startOffset_get", arguments);
    }
  }.startOffset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "method", {
  configurable: true,
  enumerable: true,
  get: {
    method() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "SVGTextPathElement", "method_get", arguments);
    }
  }.method,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "spacing", {
  configurable: true,
  enumerable: true,
  get: {
    spacing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "SVGTextPathElement", "spacing_get", arguments);
    }
  }.spacing,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPathElement"].prototype, "SVGTextPathElement", "href_get", arguments);
    }
  }.href,
  set: undefined
});