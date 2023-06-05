// SVGTextPathElement对象

bodavm.memory.globalobj['SVGTextPathElement'] = function SVGTextPathElement() {
  console.log_copy('SVGTextPathElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGTextPathElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTextPathElement'], "SVGTextPathElement");
bodavm.memory.globalobj['SVGTextPathElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGTextContentElement'].prototype;
bodavm.memory.globalobj['SVGTextPathElement'].__proto__ = bodavm.memory.globalobj['SVGTextContentElement'];
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_SPACINGTYPE_EXACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_SPACINGTYPE_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_SPACINGTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_METHODTYPE_STRETCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_METHODTYPE_ALIGN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_METHODTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_SPACINGTYPE_EXACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_SPACINGTYPE_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_SPACINGTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_METHODTYPE_STRETCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_METHODTYPE_ALIGN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "TEXTPATH_METHODTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "startOffset", {
  configurable: true,
  enumerable: true,
  get: function startOffset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPathElement'].prototype, "SVGTextPathElement", "startOffset_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "method", {
  configurable: true,
  enumerable: true,
  get: function method() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPathElement'].prototype, "SVGTextPathElement", "method_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "spacing", {
  configurable: true,
  enumerable: true,
  get: function spacing() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPathElement'].prototype, "SVGTextPathElement", "spacing_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGTextPathElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGTextPathElement'].prototype, "SVGTextPathElement", "href_get", arguments);
  },
  set: undefined
}, 'prototype');