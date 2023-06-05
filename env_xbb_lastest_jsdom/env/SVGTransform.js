// SVGTransform对象

bodavm.memory.globalobj['SVGTransform'] = function SVGTransform() {
  console.log_copy('SVGTransform 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTransform)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTransform'], "SVGTransform");
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_TRANSLATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_SCALE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_ROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_SKEWX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_SKEWY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('SVGTransform', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "matrix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "angle", {
  configurable: true,
  enumerable: true,
  get: function angle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "angle_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_TRANSLATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_SCALE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_ROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_SKEWX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "SVG_TRANSFORM_SKEWY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "setMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "setMatrix", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "setRotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setRotate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "setRotate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "setScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "setScale", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "setSkewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSkewX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "setSkewX", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "setSkewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSkewY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "setSkewY", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTransform', "setTranslate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setTranslate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTransform'].prototype, "SVGTransform", "setTranslate", arguments);
  }
}, 'prototype');