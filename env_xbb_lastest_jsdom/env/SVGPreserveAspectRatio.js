// SVGPreserveAspectRatio对象

bodavm.memory.globalobj['SVGPreserveAspectRatio'] = function SVGPreserveAspectRatio() {
  console.log_copy('SVGPreserveAspectRatio 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGPreserveAspectRatio)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGPreserveAspectRatio'], "SVGPreserveAspectRatio");
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMINYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMIDYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMAXYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMINYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMIDYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMAXYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMINYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMIDYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMAXYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_MEETORSLICE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_MEETORSLICE_MEET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_MEETORSLICE_SLICE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPreserveAspectRatio'].prototype, "SVGPreserveAspectRatio", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPreserveAspectRatio'].prototype, "SVGPreserveAspectRatio", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "meetOrSlice", {
  configurable: true,
  enumerable: true,
  get: function meetOrSlice() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPreserveAspectRatio'].prototype, "SVGPreserveAspectRatio", "meetOrSlice_get", arguments);
  },
  set: function meetOrSlice() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGPreserveAspectRatio'].prototype, "SVGPreserveAspectRatio", "meetOrSlice_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMINYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMIDYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMAXYMIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMINYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMIDYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMAXYMID", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMINYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMIDYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_PRESERVEASPECTRATIO_XMAXYMAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_MEETORSLICE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_MEETORSLICE_MEET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGPreserveAspectRatio', "SVG_MEETORSLICE_SLICE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');