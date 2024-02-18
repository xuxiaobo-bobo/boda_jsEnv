// SVGLinearGradientElement对象

bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"] = function SVGLinearGradientElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGLinearGradientElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"], "SVGLinearGradientElement");
bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGradientElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"], "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"], "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"], "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"], "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "x1", {
  configurable: true,
  enumerable: true,
  get: {
    x1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "SVGLinearGradientElement", "x1_get", arguments);
    }
  }.x1,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "y1", {
  configurable: true,
  enumerable: true,
  get: {
    y1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "SVGLinearGradientElement", "y1_get", arguments);
    }
  }.y1,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "x2", {
  configurable: true,
  enumerable: true,
  get: {
    x2() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "SVGLinearGradientElement", "x2_get", arguments);
    }
  }.x2,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "y2", {
  configurable: true,
  enumerable: true,
  get: {
    y2() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLinearGradientElement"].prototype, "SVGLinearGradientElement", "y2_get", arguments);
    }
  }.y2,
  set: undefined
});