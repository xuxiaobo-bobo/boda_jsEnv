// SVGRadialGradientElement对象

bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"] = function SVGRadialGradientElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGRadialGradientElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"], "SVGRadialGradientElement");
bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGradientElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGradientElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"], "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"], "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"], "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"], "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "cx", {
  configurable: true,
  enumerable: true,
  get: {
    cx() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "SVGRadialGradientElement", "cx_get", arguments);
    }
  }.cx,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "cy", {
  configurable: true,
  enumerable: true,
  get: {
    cy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "SVGRadialGradientElement", "cy_get", arguments);
    }
  }.cy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "r", {
  configurable: true,
  enumerable: true,
  get: {
    r() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "SVGRadialGradientElement", "r_get", arguments);
    }
  }.r,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "fx", {
  configurable: true,
  enumerable: true,
  get: {
    fx() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "SVGRadialGradientElement", "fx_get", arguments);
    }
  }.fx,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "fy", {
  configurable: true,
  enumerable: true,
  get: {
    fy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "SVGRadialGradientElement", "fy_get", arguments);
    }
  }.fy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "fr", {
  configurable: true,
  enumerable: true,
  get: {
    fr() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRadialGradientElement"].prototype, "SVGRadialGradientElement", "fr_get", arguments);
    }
  }.fr,
  set: undefined
});