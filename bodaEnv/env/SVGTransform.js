// SVGTransform对象

bodaEnv.memory.globlProtoObj["SVGTransform"] = function SVGTransform() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTransform 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVGTransform");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_TRANSLATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_SCALE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_ROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_SKEWX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"], "SVG_TRANSFORM_SKEWY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: {
    matrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "matrix_get", arguments);
    }
  }.matrix,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "angle", {
  configurable: true,
  enumerable: true,
  get: {
    angle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "angle_get", arguments);
    }
  }.angle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_TRANSLATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_SCALE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_ROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_SKEWX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVG_TRANSFORM_SKEWY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "setMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "setMatrix", arguments);
    }
  }.setMatrix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "setRotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setRotate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "setRotate", arguments);
    }
  }.setRotate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "setScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setScale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "setScale", arguments);
    }
  }.setScale
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "setSkewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setSkewX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "setSkewX", arguments);
    }
  }.setSkewX
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "setSkewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setSkewY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "setSkewY", arguments);
    }
  }.setSkewY
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "setTranslate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setTranslate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransform"].prototype, "SVGTransform", "setTranslate", arguments);
    }
  }.setTranslate
});