// SVGForeignObjectElement对象

bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"] = function SVGForeignObjectElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGForeignObjectElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"], "SVGForeignObjectElement");
bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "SVGForeignObjectElement", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "SVGForeignObjectElement", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "SVGForeignObjectElement", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGForeignObjectElement"].prototype, "SVGForeignObjectElement", "height_get", arguments);
    }
  }.height,
  set: undefined
});