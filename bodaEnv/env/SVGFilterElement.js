// SVGFilterElement对象

bodaEnv.memory.globlProtoObj["SVGFilterElement"] = function SVGFilterElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGFilterElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGFilterElement"], "SVGFilterElement");
bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGFilterElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "filterUnits", {
  configurable: true,
  enumerable: true,
  get: {
    filterUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "filterUnits_get", arguments);
    }
  }.filterUnits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "primitiveUnits", {
  configurable: true,
  enumerable: true,
  get: {
    primitiveUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "primitiveUnits_get", arguments);
    }
  }.primitiveUnits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFilterElement"].prototype, "SVGFilterElement", "href_get", arguments);
    }
  }.href,
  set: undefined
});