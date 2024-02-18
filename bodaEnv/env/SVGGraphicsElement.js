// SVGGraphicsElement对象

bodaEnv.memory.globlProtoObj["SVGGraphicsElement"] = function SVGGraphicsElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGGraphicsElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"], "SVGGraphicsElement");
bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: {
    transform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "transform_get", arguments);
    }
  }.transform,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "nearestViewportElement", {
  configurable: true,
  enumerable: true,
  get: {
    nearestViewportElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "nearestViewportElement_get", arguments);
    }
  }.nearestViewportElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "farthestViewportElement", {
  configurable: true,
  enumerable: true,
  get: {
    farthestViewportElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "farthestViewportElement_get", arguments);
    }
  }.farthestViewportElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: {
    requiredExtensions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "requiredExtensions_get", arguments);
    }
  }.requiredExtensions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: {
    systemLanguage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "systemLanguage_get", arguments);
    }
  }.systemLanguage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "getBBox", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBBox() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "getBBox", arguments);
    }
  }.getBBox
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "getCTM", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCTM() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "getCTM", arguments);
    }
  }.getCTM
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "getScreenCTM", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getScreenCTM() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype, "SVGGraphicsElement", "getScreenCTM", arguments);
    }
  }.getScreenCTM
});