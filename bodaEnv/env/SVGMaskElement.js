// SVGMaskElement对象

bodaEnv.memory.globlProtoObj["SVGMaskElement"] = function SVGMaskElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGMaskElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGMaskElement"], "SVGMaskElement");
bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGMaskElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "maskUnits", {
  configurable: true,
  enumerable: true,
  get: {
    maskUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "maskUnits_get", arguments);
    }
  }.maskUnits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "maskContentUnits", {
  configurable: true,
  enumerable: true,
  get: {
    maskContentUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "maskContentUnits_get", arguments);
    }
  }.maskContentUnits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: {
    requiredExtensions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "requiredExtensions_get", arguments);
    }
  }.requiredExtensions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: {
    systemLanguage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMaskElement"].prototype, "SVGMaskElement", "systemLanguage_get", arguments);
    }
  }.systemLanguage,
  set: undefined
});