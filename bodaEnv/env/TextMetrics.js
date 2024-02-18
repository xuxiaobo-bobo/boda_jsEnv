// TextMetrics对象

bodaEnv.memory.globlProtoObj["TextMetrics"] = function TextMetrics() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextMetrics 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextMetrics"], "TextMetrics");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "actualBoundingBoxLeft", {
  configurable: true,
  enumerable: true,
  get: {
    actualBoundingBoxLeft() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "actualBoundingBoxLeft_get", arguments);
    }
  }.actualBoundingBoxLeft,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "actualBoundingBoxRight", {
  configurable: true,
  enumerable: true,
  get: {
    actualBoundingBoxRight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "actualBoundingBoxRight_get", arguments);
    }
  }.actualBoundingBoxRight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "fontBoundingBoxAscent", {
  configurable: true,
  enumerable: true,
  get: {
    fontBoundingBoxAscent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "fontBoundingBoxAscent_get", arguments);
    }
  }.fontBoundingBoxAscent,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "fontBoundingBoxDescent", {
  configurable: true,
  enumerable: true,
  get: {
    fontBoundingBoxDescent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "fontBoundingBoxDescent_get", arguments);
    }
  }.fontBoundingBoxDescent,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "actualBoundingBoxAscent", {
  configurable: true,
  enumerable: true,
  get: {
    actualBoundingBoxAscent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "actualBoundingBoxAscent_get", arguments);
    }
  }.actualBoundingBoxAscent,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "actualBoundingBoxDescent", {
  configurable: true,
  enumerable: true,
  get: {
    actualBoundingBoxDescent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextMetrics"].prototype, "TextMetrics", "actualBoundingBoxDescent_get", arguments);
    }
  }.actualBoundingBoxDescent,
  set: undefined
});