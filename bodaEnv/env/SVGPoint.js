// SVGPoint对象

bodaEnv.memory.globlProtoObj["SVGPoint"] = function SVGPoint() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGPoint 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGPoint"], "SVGPoint");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "SVGPoint", "x_get", arguments);
    }
  }.x,
  set: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "SVGPoint", "x_set", arguments);
    }
  }.x
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "SVGPoint", "y_get", arguments);
    }
  }.y,
  set: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "SVGPoint", "y_set", arguments);
    }
  }.y
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "matrixTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    matrixTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPoint"].prototype, "SVGPoint", "matrixTransform", arguments);
    }
  }.matrixTransform
});