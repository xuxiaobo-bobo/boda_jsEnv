// SVGRect对象

bodaEnv.memory.globlProtoObj["SVGRect"] = function SVGRect() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGRect 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGRect"], "SVGRect");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "x_get", arguments);
    }
  }.x,
  set: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "x_set", arguments);
    }
  }.x
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "y_get", arguments);
    }
  }.y,
  set: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "y_set", arguments);
    }
  }.y
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGRect"].prototype, "SVGRect", "height_set", arguments);
    }
  }.height
});