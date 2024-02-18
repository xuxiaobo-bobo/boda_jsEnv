// SVGTextPositioningElement对象

bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"] = function SVGTextPositioningElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTextPositioningElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"], "SVGTextPositioningElement");
bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGTextContentElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGTextContentElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"], "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"], "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"], "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "SVGTextPositioningElement", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "SVGTextPositioningElement", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "dx", {
  configurable: true,
  enumerable: true,
  get: {
    dx() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "SVGTextPositioningElement", "dx_get", arguments);
    }
  }.dx,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "dy", {
  configurable: true,
  enumerable: true,
  get: {
    dy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "SVGTextPositioningElement", "dy_get", arguments);
    }
  }.dy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "rotate", {
  configurable: true,
  enumerable: true,
  get: {
    rotate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype, "SVGTextPositioningElement", "rotate_get", arguments);
    }
  }.rotate,
  set: undefined
});