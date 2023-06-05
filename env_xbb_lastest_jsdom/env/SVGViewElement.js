// SVGViewElement对象

bodavm.memory.globalobj['SVGViewElement'] = function SVGViewElement() {
  console.log_copy('SVGViewElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGViewElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGViewElement'], "SVGViewElement");
bodavm.memory.globalobj['SVGViewElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGViewElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGViewElement', "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGViewElement', "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGViewElement', "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGViewElement', "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGViewElement'].prototype, "SVGViewElement", "viewBox_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGViewElement', "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGViewElement'].prototype, "SVGViewElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGViewElement', "zoomAndPan", {
  configurable: true,
  enumerable: true,
  get: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGViewElement'].prototype, "SVGViewElement", "zoomAndPan_get", arguments);
  },
  set: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGViewElement'].prototype, "SVGViewElement", "zoomAndPan_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGViewElement', "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGViewElement', "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGViewElement', "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');