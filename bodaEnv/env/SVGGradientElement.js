// SVGGradientElement对象

bodaEnv.memory.globlProtoObj["SVGGradientElement"] = function SVGGradientElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGGradientElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGGradientElement"], "SVGGradientElement");
bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGGradientElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"], "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"], "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"], "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"], "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "gradientUnits", {
  configurable: true,
  enumerable: true,
  get: {
    gradientUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVGGradientElement", "gradientUnits_get", arguments);
    }
  }.gradientUnits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "gradientTransform", {
  configurable: true,
  enumerable: true,
  get: {
    gradientTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVGGradientElement", "gradientTransform_get", arguments);
    }
  }.gradientTransform,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "spreadMethod", {
  configurable: true,
  enumerable: true,
  get: {
    spreadMethod() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVGGradientElement", "spreadMethod_get", arguments);
    }
  }.spreadMethod,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype, "SVGGradientElement", "href_get", arguments);
    }
  }.href,
  set: undefined
});