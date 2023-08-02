// SVGTransform对象

SVGTransform = function SVGTransform() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTransform)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTransform 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTransform, "SVGTransform");
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_TRANSLATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_SCALE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_ROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_SKEWX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_SKEWY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "matrix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "angle", {
  configurable: true,
  enumerable: true,
  get: function angle() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "angle_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_TRANSLATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_SCALE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_ROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_SKEWX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_SKEWY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "setMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMatrix() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "setRotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRotate() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setRotate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "setScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setScale() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setScale", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "setSkewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSkewX() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setSkewX", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "setSkewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSkewY() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setSkewY", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransform.prototype, "setTranslate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTranslate() {
    return bodavm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setTranslate", arguments);
  }
});