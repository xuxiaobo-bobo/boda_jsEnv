// SVGFEDisplacementMapElement对象

bodavm.memory.globalobj['SVGFEDisplacementMapElement'] = function SVGFEDisplacementMapElement() {
  console.log_copy('SVGFEDisplacementMapElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEDisplacementMapElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEDisplacementMapElement'], "SVGFEDisplacementMapElement");
bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEDisplacementMapElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_A", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_B", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_G", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_A", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_B", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_G", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "SVG_CHANNEL_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "in2", {
  configurable: true,
  enumerable: true,
  get: function in2() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "in2_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "scale", {
  configurable: true,
  enumerable: true,
  get: function scale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "scale_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "xChannelSelector", {
  configurable: true,
  enumerable: true,
  get: function xChannelSelector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "xChannelSelector_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "yChannelSelector", {
  configurable: true,
  enumerable: true,
  get: function yChannelSelector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "yChannelSelector_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDisplacementMapElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDisplacementMapElement'].prototype, "SVGFEDisplacementMapElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');