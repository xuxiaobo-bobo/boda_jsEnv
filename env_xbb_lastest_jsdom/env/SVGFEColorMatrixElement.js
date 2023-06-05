// SVGFEColorMatrixElement对象

bodavm.memory.globalobj['SVGFEColorMatrixElement'] = function SVGFEColorMatrixElement() {
  console.log_copy('SVGFEColorMatrixElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEColorMatrixElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEColorMatrixElement'], "SVGFEColorMatrixElement");
bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEColorMatrixElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_HUEROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_HUEROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "SVG_FECOLORMATRIX_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "values_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEColorMatrixElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEColorMatrixElement'].prototype, "SVGFEColorMatrixElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');